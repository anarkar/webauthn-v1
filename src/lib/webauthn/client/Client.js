
/**
 * Dependencies
 * @ignore
 */

/**
 * Module Dependencies
 * @ignore
 */
import base64url from './base64url'
import CBOR from 'cbor';

/**
 * Client
 * @ignore
 */
class Client {
  constructor(options = {}) {
    const defaults = {
      pathPrefix: '/webauthn',
      credentialEndpoint: '/register',
      assertionEndpoint: '/login',
      challengeEndpoint: '/response',
      logoutEndpoint: '/logout',
    }

    Object.assign(this, defaults, options)
  }

  static publicKeyCredentialToJSON(pubKeyCred) {
    if (ArrayBuffer.isView(pubKeyCred)) {
      return Client.publicKeyCredentialToJSON(pubKeyCred.buffer)
    }

    if (pubKeyCred instanceof Array) {
      const arr = []

      for (let i of pubKeyCred) {
        arr.push(Client.publicKeyCredentialToJSON(i))
      }

      return arr
    }

    if (pubKeyCred instanceof ArrayBuffer) {
      return base64url.encode(pubKeyCred)
    }

    if (pubKeyCred instanceof Object) {
      const obj = {}

      for (let key in pubKeyCred) {
        obj[key] = Client.publicKeyCredentialToJSON(pubKeyCred[key])
      }

      return obj
    }

    return pubKeyCred
  }

  static generateRandomBuffer(len) {
    const buf = new Uint8Array(len || 32)
    window.crypto.getRandomValues(buf)
    return buf
  }

  static preformatMakeCredReq(makeCredReq) {
    makeCredReq.challenge = base64url.decode(makeCredReq.challenge)
    makeCredReq.user.id = base64url.decode(makeCredReq.user.id)
    return makeCredReq
  }

  static preformatGetAssertReq(getAssert) {
    getAssert.challenge = base64url.decode(getAssert.challenge)

    for (let allowCred of getAssert.allowCredentials) {
      allowCred.id = base64url.decode(allowCred.id)
      allowCred.transports = ["internal"]
    }

    return getAssert
  }

  async getMakeCredentialsChallenge(formBody) {
    const response = await fetch(`${this.pathPrefix}${this.credentialEndpoint}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formBody)
    })

    if (response.status === 403) {
      const failureMessage = (await response.json()).message
      const errorMessage = 'Registration failed'
      throw new Error(failureMessage ? `${errorMessage}: ${failureMessage}.` : `${errorMessage}.`)
    }

    if (response.status < 200 || response.status > 205) {
      throw new Error('Server responded with error.')
    }

    return await response.json()
  }

  async sendWebAuthnResponse(body) {
    const response = await fetch(`${this.pathPrefix}${this.challengeEndpoint}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (response.status !== 200) {
      throw new Error('Server responded with error.')
    }

    return await response.json()
  }

  async getGetAssertionChallenge(formBody) {
    const response = await fetch(`${this.pathPrefix}${this.assertionEndpoint}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formBody)
    })

    if (response.status !== 200) {
      throw new Error('Server responded with error.')
    }

    return await response.json()
  }

  async register(data = {}) {
    try {
      const challenge = await this.getMakeCredentialsChallenge(data)
      console.log('REGISTER CHALLENGE', challenge)

      const publicKey = Client.preformatMakeCredReq(challenge)
      publicKey['authenticatorSelection'] = {
        authenticatorAttachment: "platform"
      }
      // publicKey['attestation'] = 'none';

      console.log('REGISTER PUBLIC KEY', publicKey)


      const credential = await navigator.credentials.create({ publicKey })
      console.log('REGISTER CREDENTIAL', credential)

      // // decode the clientDataJSON into a utf-8 string
      // const utf8Decoder = new TextDecoder('utf-8');
      // const decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON)

      // // parse the string as an object
      // const clientDataObj = JSON.parse(decodedClientData);

      // console.log('clientDataObj', clientDataObj)

      // const decodedAttestationObj = CBOR.decode(credential.response.attestationObject);

      // console.log('decodedAttestationObject', decodedAttestationObj);

      const credentialResponse = Client.publicKeyCredentialToJSON(credential)
      console.log('REGISTER RESPONSE', credentialResponse)

      return await this.sendWebAuthnResponse(credentialResponse)
    } catch (err) {
      console.error(err)
    }
  }

  // async completeRegistration(publicKey) {
  //   try {
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  async login(data = {}) {
    try {
      const challenge = await this.getGetAssertionChallenge(data)
      console.log('LOGIN CHALLENGE', challenge)

      const publicKey = Client.preformatGetAssertReq(challenge)
      console.log('LOGIN PUBLIC KEY', publicKey)

      const credential = await navigator.credentials.get({ publicKey })
      console.log('LOGIN CREDENTIAL', credential)

      const credentialResponse = Client.publicKeyCredentialToJSON(credential)
      console.log('LOGIN RESPONSE', credentialResponse)

      return await this.sendWebAuthnResponse(credentialResponse)

    } catch (err) {
      console.error(err)
    }
  }

  async logout() {
    const response = await fetch(`${this.pathPrefix}${this.logoutEndpoint}`, {
      method: 'GET',
      credentials: 'include',
    })

    if (response.status !== 200) {
      throw new Error('Server responded with error.')
    }

    return await response.json()
  }
}

/**
 * Exports
 * @ignore
 */
export default Client
