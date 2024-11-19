import express from "express";
import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment features
orderRouter.post("/place", authUser, placeOrder); //using this endpoint for cod
orderRouter.post("/stripe", authUser, placeOrderStripe); //using this endpoint for stripe
orderRouter.post("/razorpay", authUser, placeOrderRazorpay); //using this endpoint for razorpay

//User feature
orderRouter.post("/userorders", authUser, userOrders);

//Verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
