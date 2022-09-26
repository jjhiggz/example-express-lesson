import fetch from "node-fetch";
import { describe, expect, it } from "vitest";
import { characters } from "./data/characters";

const url = "http://localhost:4000";
const getJSON = (endpoint) =>
  fetch(`${url}${endpoint}`).then((res) => res.json());

const getText = (endpoint) =>
  fetch(`${url}${endpoint}`).then((res) => res.text());

const getCharacter = (id) => {
  return characters.find((character) => character.id === id);
};

describe("does the '/' endpoint work?", () => {
  it("should say hello world", async () => {
    const response = await getText("/");
    expect(response).toBe("Hello World");
  });
});

describe("does the '/characters' endpoint work?", () => {
  it("should return the correct characters", async () => {
    expect(await getJSON("/characters")).toEqual(characters);
  });
});

describe("does the '/characters/:id' endpoint work?", () => {
  it(`should return ${getCharacter(1).name} for /characters/1`, async () => {
    expect(await getJSON("/characters/1")).toEqual(getCharacter(1));
  });

  it(`should return ${getCharacter(2).name} for /characters/2`, async () => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    expect(await getJSON("/characters/2")).toEqual(
      //   "poop"
      getCharacter(2)
    );
  });
});
