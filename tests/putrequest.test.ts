 import { test } from "@playwright/test";
 import  {setupAPI} from "../helper/setup";

test.only("Query parameter in Playwright API testing", async ({ request }) => {
    const setupApi = new setupAPI(request);
  // Create booking and retrieve booking ID

  const bookingResponse = await setupApi.createBooking(request);
  const bookingId = await setupApi.getBookingID(bookingResponse);

  // Create GET API request with query parameters
  const getAPIResponse = await request.get("/booking/", {
    params: {
      firstname: "playwright",
      lastname: "api testing",
    },
  });
  await setupApi.validateResponse(getAPIResponse);

  // Generate token
  const token = await setupApi.generateToken(request);

  // Update booking details
  await setupApi.updateBooking(request, bookingId, token);
  
});

