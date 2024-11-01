import { test } from "@playwright/test";
import { setupAPI } from "../helper/setup";

test("Create a booking", async ({ request }) => {
    const setupApi = new setupAPI(request);
    const bookingResponse = await setupApi.createBooking(request);
    await setupApi.validateResponseContainsSpecificProperty(bookingResponse,"additionalneeds","super bowls");
});
