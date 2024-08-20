// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { Hero } from "../src/mySolution.js";

describe("hero class", () => {
  it("should create a hero", () => {
    let myHero = new Hero();
    assert.strictEqual(
      myHero.name,
      "Hero",
      "Hero should have a 'name' attribute with value \"Hero\""
    );
    assert.strictEqual(
      myHero.experience,
      0,
      "Hero should have an 'experience' attribute with value 0"
    );
    assert.strictEqual(
      myHero.health,
      100,
      "Hero should have a 'health' attribute with value 100"
    );
    assert.strictEqual(
      myHero.position,
      "00",
      "Hero should have a 'position' attribute with value \"00\""
    );
    assert.strictEqual(
      myHero.damage,
      5,
      "Hero should have a 'damage' attribute with value 5"
    );
  });
  it("should use name argument", () => {
    let newHero = new Hero("Greg");
    assert.strictEqual(
      newHero.name,
      "Greg",
      "Hero Greg should have a 'name' attribute with value \"Greg\""
    );
    assert.strictEqual(
      newHero.experience,
      0,
      "Hero Greg should have an 'experience' attribute with value 0"
    );
    assert.strictEqual(
      newHero.health,
      100,
      "Hero Greg should have a 'health' attribute with value 100"
    );
    assert.strictEqual(
      newHero.position,
      "00",
      "Hero Greg should have a 'position' attribute with value \"00\""
    );
    assert.strictEqual(
      newHero.damage,
      5,
      "Hero Greg should have a 'damage' attribute with value 5"
    );
  });
  it("should work for random heros", () => {
    for (let _ = 0; _ < 10; ++_) {
      let name =
        Math.random() < 0.5
          ? "Hero"
          : String.fromCharCode(
              ...Array.from(
                { length: Math.floor(Math.random() * 8 + 3) },
                (_, i) => Math.floor(Math.random() * 26 + (i ? 97 : 65))
              )
            );
      let msg = name == "Hero" ? "Hero" : `Hero ${name}`;
      let newHero = name == "Hero" ? new Hero() : new Hero(name);
      assert.strictEqual(
        newHero.name,
        name,
        `${msg} should have a 'name' attribute with value "${name}"`
      );
      assert.strictEqual(
        newHero.experience,
        0,
        `${msg} should have an 'experience' attribute with value 0`
      );
      assert.strictEqual(
        newHero.health,
        100,
        `${msg} should have a 'health' attribute with value 100`
      );
      assert.strictEqual(
        newHero.position,
        "00",
        `${msg} should have a 'position' attribute with value "00"`
      );
      assert.strictEqual(
        newHero.damage,
        5,
        `${msg} should have a 'damage' attribute with value 5`
      );
    }
  });
});
