import { SymbaroumItemSheet } from "./item.js";

export class EquipmentSheet extends SymbaroumItemSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["symbaroum", "sheet", "item"],
            template: "systems/symbaroum/template/sheet/equipment.hbs",
            width: 700,
            height: 600,
            resizable: false,
            tabs: [
                {
                    navSelector: ".sheet-tabs",
                    contentSelector: ".sheet-body",
                    initial: "description",
                },
            ]
        });
    }

}
