
/**
 *  Stripe Card Details
 */
export interface Card {
	id: string;
	object: string;
	address_city?: any;
	address_country?: any;
	address_line1?: any;
	address_line1_check?: any;
	address_line2?: any;
	address_state?: any;
	address_zip?: any;
	address_zip_check?: any;
	brand: string;
	country: string;
	cvc_check?: any;
	dynamic_last4?: any;
	exp_month: number;
	exp_year: number;
	fingerprint: string;
	funding: string;
	last4: string;
	metadata: any;
	name?: any;
	tokenization_method?: any;
}


/**
 * Stripe token
 */
export interface StripeToken {
	id: string;
	object: string;
	card: Card;
	client_ip?: any;
	created: number;
	livemode: boolean;
	type: string;
	used: boolean;
}
