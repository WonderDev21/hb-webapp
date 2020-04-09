import { getInstance } from '../../lib/axios'
import axios from '../../store/axios-instance'
import { getCookie } from '../../utils/Cookies'

export async function charge(token) {
  const userToken = getCookie('hbtoken_30')
  const data = {
    data: {
      planId: 1
    }
  }
  try {
    const response = axios.post('/subscriptions', data, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    return response
  } catch (e) {
    return e.response
  }
}

export async function createPaymentProfile(token) {
  const userToken = getCookie('hbtoken_30')
  const data = {
    data: {
      last4: token.card.last4,
      brand: token.card.brand,
      external_payment_info: { stripe_token: token.id }
    }
  }

  try {
    const response = axios.put('/payment_profile', data, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    return response
  } catch (e) {
    return e.response
  }
}
