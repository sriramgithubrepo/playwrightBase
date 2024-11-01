import postRequest from "../test-data/post_resource_body.json";
import tokenRequest from "../test-data/token_request_body.json";
import putRequest from "../test-data/put_request_body.json";
import { APIRequest } from "@playwright/test";
import { expect } from "@playwright/test";

export class setupAPI {
    request: APIRequest;
    constructor(request) {
      this.request = request;
    }
  
    // Helper function to check API responses
    async validateResponse(response) {
      const responseData = await response.json();
      console.log(responseData);
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);
      return responseData;
    }

    async validateResponseContainsSpecificProperty(response,propertyName,propertyValue) {
      expect(response.booking).toHaveProperty(propertyName,propertyValue);
    }
  
    // Helper function to create a booking
    async createBooking(request) {
      const response = await request.post("/booking", { data: postRequest });
      return await this.validateResponse(response);
    }
    async getBookingID(response){
      return response.bookingid;
    };
    // Helper function to generate a token
    async generateToken(request) {
      const response = await request.post("/auth", { data: tokenRequest });
      return (await this.validateResponse(response)).token;
    }
  
    // Helper function to update booking
    async updateBooking(request, bookingId, token) {
      const response = await request.put(`/booking/${bookingId}`, {
        headers: {
          "Content-Type": "application/json",
          "Cookie": `token=${token}`,
        },
        data: putRequest,
      });
      return await this.validateResponse(response);
    }
  }