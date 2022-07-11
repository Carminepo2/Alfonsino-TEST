interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

type GetPartnersResponse = Array<Partner>;

type AddPartnerResponse = Partner;

interface AddPartnerRequest {
  title: string;
}
