import { sortByDate, sortByScore, filterDirector } from "../src/data.js";
import {
  shortList,
  shortListSortedDesc,
  shortListSortedAsc,
  shortListSortedScore,
  shortListFilteredByDirectorIsaoTakahata,
  shortListFilteredByDirectorHayaoMiyazaki,
} from "./testdata.js";

describe("sortbyDate", () => {
  it("should be a function", () => {
    expect(typeof sortByDate).toBe("function");
  });

  it("should return the list sorted by ascending date", () => {
    expect(sortByDate(shortList, "ASC")).toStrictEqual(shortListSortedAsc);
  });

  it("should return the list sorted by descending date", () => {
    expect(sortByDate(shortList, "DESC")).toStrictEqual(shortListSortedDesc);
  });
});
describe("sortByScore", () => {
  it("should be a function", () => {
    expect(typeof sortByScore).toBe("function");
  });

  it("should return the list sorted by descending score", () => {
    expect(sortByScore(shortList, "byScore")).toStrictEqual(
      shortListSortedScore
    );
  });
});
describe("filterDirector", () => {
  it("should be a function", () => {
    expect(typeof filterDirector).toBe("function");
  });
  it("should return the list filtered by Isao Takahata", () => {
    expect(filterDirector(shortList, "Isao Takahata")).toStrictEqual(
      shortListFilteredByDirectorIsaoTakahata
    );
  });
  it("should return the list filtered by Hayao Miyazaki", () => {
    expect(filterDirector(shortList, "Hayao Miyazaki")).toStrictEqual(
      shortListFilteredByDirectorHayaoMiyazaki
    );
  });

  // it('should return the list filtered by director Hayao Miyazaki', () => {
  //   const toTestResult = filterDirector(shortList, "Hayao Miyazaki")
  //   const isEveryDirectorHayao = toTestResult.every((film) => {
  //     return film.director === "Hayao Miyazaki"
  //   });
  //   expect(isEveryDirectorHayao).toBe(true);
  // });
});
