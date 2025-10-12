(function() {
  console.log("[Dirt2Diamond] Mod loading...");

  // Wait for the game to finish loading before registering recipes
  function tryRegisterRecipe() {
    if (typeof Game === "undefined" || typeof Recipes === "undefined") {
      console.log("[Dirt2Diamond] Waiting for game to initialize...");
      setTimeout(tryRegisterRecipe, 2000);
      return;
    }

    try {
      // Register a shapeless recipe: 1 dirt -> 1 diamond
      Recipes.addShapelessRecipe("diamond", ["dirt"]);
      console.log("[Dirt2Diamond] Recipe added successfully! 💎");

      // Optional: let the player know it worked
      alert("✅ Dirt2Diamond mod loaded! You can now craft diamonds from dirt.");
    } catch (err) {
      console.error("[Dirt2Diamond] Failed to add recipe:", err);
    }
  }

  tryRegisterRecipe();
})();
