import { getVolunteers } from "@/lib/api";

global.fetch = jest.fn(() =>
  Promise.resolve({
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
  })
) as jest.Mock;

describe("getVolunteers", () => {
  it("fetches volunteers successfully", async () => {
    const volunteers = await getVolunteers(1);
    expect(volunteers.length).toBe(1);
    expect(volunteers[0].email).toBe("john@example.com");
    expect(volunteers[0].name.first).toBe("John");
  });

  it("returns empty array on fetch error", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ ok: false, status: 500 })
    );
    const volunteers = await getVolunteers(1);
    expect(volunteers).toEqual([]);
  });
});
