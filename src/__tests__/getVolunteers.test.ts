import { getVolunteers } from "@/lib/api";

global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  (console.error as jest.Mock).mockRestore();
});

describe("getVolunteers", () => {
  it("fetches volunteers successfully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [
            {
              name: { first: "John", last: "Doe" },
              email: "john@example.com",
              phone: "123-456-7890",
              picture: {
                thumbnail: "thumb.jpg",
                medium: "medium.jpg",
              },
            },
          ],
        }),
    });

    const volunteers = await getVolunteers(1);
    expect(volunteers.length).toBe(1);
    expect(volunteers[0].email).toBe("john@example.com");
    expect(volunteers[0].name.first).toBe("John");
  });

  it("throws an error when API response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(getVolunteers(1)).rejects.toThrow("Failed to fetch volunteers: 500");
  });

  it("throws an error when fetch itself fails", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(getVolunteers(1)).rejects.toThrow("Network error");
  });
});
