// === Dirt to Diamond Mod for Eaglercraft 1.12.2 ===
// By You :) — runs after the game loads

(function() {
    console.log("[Dirt2Diamond] Mod loaded");

    function waitForGame() {
        if (typeof net === "undefined" || !net.minecraft) {
            setTimeout(waitForGame, 500);
            return;
        }

        try {
            const CraftingManager = net.minecraft.item.crafting.CraftingManager;
            const ItemStack = net.minecraft.item.ItemStack;
            const Item = net.minecraft.item.Item;
            const Blocks = net.minecraft.init.Blocks;
            const Items = net.minecraft.init.Items;
            const ShapedRecipes = net.minecraft.item.crafting.ShapedRecipes;

            function stack(item, count) {
                return new ItemStack(item, count);
            }

            // define recipe: 1x1 dirt -> diamond
            const recipe = new ShapedRecipes(
                "custom:dirt_to_diamond",
                1, 1,
                [ stack(Item.getItemFromBlock(Blocks.DIRT), 1) ],
                stack(Items.DIAMOND, 1)
            );

            CraftingManager.field_193380_a.add(recipe);
            console.log("[Dirt2Diamond] Recipe registered successfully!");
        } catch (e) {
            console.error("[Dirt2Diamond] Error registering recipe:", e);
        }
    }

    waitForGame();
})();
