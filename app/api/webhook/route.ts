import Stripe from "stripe";
import { headers } from "next/headers"
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request){
    const body = await req.text()
    const signature = headers().get("Stripe-Signature") as string

    let event : Stripe.Event

    try{
        event = stripe.webhooks.constructEvent(
            body, 
            signature, 
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    }
    catch(error: any){
        return new NextResponse(`Webhook Errors: ${error.message}`, { status : 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session
    const address = session?.customer_details?.address
}