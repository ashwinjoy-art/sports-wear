import express from 'express'
import {placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import userAuth from '../middleware/userAuth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',userAuth,placeOrder)
orderRouter.post('/stripe',userAuth,placeOrderStripe)
orderRouter.post('/razorpay',userAuth,placeOrderRazorPay)

// User Feature
orderRouter.post('/userorders',userAuth,userOrders)

// Verify Payment
orderRouter.post('/verifyStripe',userAuth,verifyStripe)
orderRouter.post('/verifyRazorpay',userAuth,verifyRazorpay)

export default orderRouter