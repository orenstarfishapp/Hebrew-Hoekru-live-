import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = ({ course }) => {
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        const fetchClientSecret = async () => {
            const response = await fetch(`/payment/${course.id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setClientSecret(data.clientSecret);
        };

        fetchClientSecret();
    }, [course.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `YOUR_RETURN_URL_HERE`, // Update with your return URL
            },
        });

        if (error) {
            showMessage(error.message);
        } else if (paymentIntent.status === 'succeeded') {
            showMessage('Payment succeeded!');
        } else {
            showMessage('An unexpected error occurred.');
        }

        setLoading(false);
    };

    const showMessage = (messageText) => {
        alert(messageText); // You can replace this with a better UI feedback
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold mb-6">תשלום עבור קורס</h1>
            <h2 className="text-2xl font-bold mb-4">{course.title_he}</h2>
            <h3 className="text-xl font-bold mb-4 text-blue-600">{course.title_en}</h3>
            <p className="mb-4"><strong>מחיר:</strong> ${course.price.toFixed(2)}</p>

            <form id="payment-form" onSubmit={handleSubmit}>
                <div id="payment-element">
                    <CardElement />
                </div>
                <button
                    id="submit"
                    className="btn btn-primary mt-4 w-full"
                    disabled={!stripe || loading}
                >
                    <div className={loading ? "spinner" : "hidden"} id="spinner"></div>
                    <span id="button-text">{loading ? "טעינה..." : "שלם כעת"}</span>
                </button>
                <div id="payment-message" className={loading ? "hidden" : ""}></div>
            </form>
        </div>
    );
};

// Load Stripe outside of a component’s render to avoid recreating the `stripe` instance on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY); // Use your actual public key

const PaymentWrapper = ({ course }) => {
    return (
        <Elements stripe={stripePromise}>
            <Payment course={course} />
        </Elements>
    );
};

export default PaymentWrapper;
