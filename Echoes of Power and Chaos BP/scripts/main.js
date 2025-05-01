import { world, ItemComponentConsumeEvent } from "@minecraft/server";
/*
world.afterEvents.entitySpawn.subscribe(event => {
  const entity = event.entity;

  if (entity.typeId === "minecraft:zombie") {
    const location = entity.location;
    const dimension = entity.dimension;

    // Elimina al zombi vanilla
    entity.kill();

    // Spawnea el zombi personalizado
    dimension.spawnEntity("epc:zombie_echoes", location);
  }
});*/

world.beforeEvents.worldInitialize.subscribe(ev => {
  ev.itemComponentRegistry.registerCustomComponent(
    "epc:on_salchicha_eaten",
    {
      onConsume: (event) => {
        const player = event.source;
        if (!player) return;

        player.addEffect("minecraft:nausea", 100, { amplifier: 1 });
        player.sendMessage("Comiste una salchicha dudosa...");
      }
    }
  );
});
