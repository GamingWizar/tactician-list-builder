export const tyranidUnits = {
  characters: {
    epicHero: [
      {
        name: "The Swamlord",
        unitComp: [
          {
            models: [
              {
                model: "The Swarmlord - EPIC HERO",
                count: "1",
                loadout: ["Syanptic pulse", "Bone sabers"],
              },
            ],
            points: "240",
          },
        ],
        profile: {
          statline: {
            movement: '8"',
            toughness: "10",
            save: "2+",
            wounds: "10",
            leadership: "7+",
            oc: "3",
            invuln: "4+",
          },
          weapons: {
            ranged: [
              {
                name: "Synaptic pulse",
                range: '18"',
                attacks: "D6+3",
                bs: "N/A",
                strength: "5",
                ap: "-1",
                damage: "2",
                abilities: ["Psychic", "Torrent"],
              },
            ],
            melee: [
              {
                name: "Bone sabers",
                range: "Melee",
                attacks: "8",
                ws: "2+",
                strength: "9",
                ap: "-2",
                damage: "3",
                abilities: ["Twin-linked"],
              },
            ],
          },
          abilities: {
            core: [
              { name: "Deadly Demise", value: "D3" },
              { name: "Leader", value: ["TYRANT GUARD"] },
            ],
            faction: [{ name: "Shadow in the Warp" }, { name: "Synapse" }],
            datasheet: [
              {
                name: "Hive Commander",
                value:
                  "At the start of your Command Phase, if this model is on the battlefield, you gain 1CP",
              },
              {
                name: "Malign Presence",
                value:
                  'If this model is your WARLORD, each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12" of this model, increase the cost of that use of that Stratagem by 1 CP',
                aura: true,
              },
              {
                name: "Domination of the Hivemind",
                value: `While a friendly TYRANIDS unit is within 9" of this model, that unit is within your army's Synapse Range`,
                aura: true,
              },
            ],
          },
        },
      },
    ],
    generic: [
      {
        name: "Hive Tyrant",
        unitComp: [
          {
            models: [
              {
                model: "Hive Tyrant",
                count: "1",
                loadout: [
                  "Monstrous Bonesword and Lash Wip",
                  "Monstrous Scything Talons",
                ],
              },
            ],
            points: "235",
          },
        ],
        profile: {
          statline: {
            movement: '8"',
            toughness: "10",
            save: "2+",
            wounds: "10",
            leadership: "7+",
            oc: "3",
            invuln: "4+",
          },
          weapons: {
            ranged: [
              {
                name: "Heavy Venom Cannon",
                range: '36"',
                attacks: "D3",
                bs: "2+",
                strength: "9",
                ap: "-2",
                damage: "3",
                abilities: ["Blast"],
              },
              {
                name: "Stranglethorn Cannon",
                range: '36"',
                attacks: "D6+1",
                bs: "2+",
                strength: "7",
                ap: "-1",
                damage: "2",
                abilities: ["Blast"],
              },
            ],
            melee: [
              {
                name: "Monstrous Bonesword and Lash Wip",
                range: "Melee",
                attacks: "6",
                ws: "2+",
                strength: "9",
                ap: "-2",
                damage: "3",
                abilities: ["Twin-linked"],
              },
              {
                name: "Monstrous Scything Talons",
                range: "Melee",
                attacks: "4",
                ws: "2+",
                strength: "7",
                ap: "-2",
                damage: "2",
                abilities: ["Extra Attacks"],
              },
            ],
          },
          abilities: {
            core: [
              { name: "Deadly Demise", value: "D3" },
              { name: "Leader", value: ["TYRANT GUARD"] },
            ],
            faction: [{ name: "Shadow in the Warp" }, { name: "Synapse" }],
            datasheet: [
              {
                name: "Will of the Hive Mind",
                value:
                  'Once per turn, one unit from your army with this ability can use it when a friendly TYRANIDS unit within 12" of that model is targeted with a Stratagem. If it does, reduce the CP cost of that usage of that Stratagem by 1CP',
              },
              {
                name: "Onslaught",
                value:
                  'While a friendly TYRANIDS unit is within 6" of this model, ranged weapons equipped by models in that unit have the [ASSULT] and [LETHAL HITS] abilities.',
                aura: true,
              },
            ],
          },
        },
      },
    ],
  },
  battleline: [
    {
      name: "Termagants",
      unitComp: [
        {
          models: [
            {
              model: "Termagant",
              count: "10",
              loadout: ["Fleshborer", "Chitinous Claws and Teeth"],
            },
          ],
          points: "60",
        },
        {
          models: [
            {
              model: "Termagant",
              count: "20",
              loadout: ["Fleshborer", "Chitinous Claws and Teeth"],
            },
          ],
          points: "120",
        },
      ],
      profile: {
        statline: {
          movement: '6"',
          toughness: "3",
          save: "5+",
          wounds: "1",
          leadership: "8+",
          oc: "2",
        },
        weapons: {
          ranged: [
            {
              name: "Fleshborer",
              range: '18"',
              attacks: "1",
              bs: "4+",
              strength: "5",
              ap: "0",
              damage: "1",
              abilities: ["Assault"],
            },
            {
              name: "Shardlauncher",
              range: '18"',
              attacks: "D3",
              bs: "4+",
              strength: "5",
              ap: "0",
              damage: "1",
              abilities: ["Blast", "Heavy"],
            },
            {
              name: "Spike Rifle",
              range: '24"',
              attacks: "1",
              bs: "4+",
              strength: "4",
              ap: "-1",
              damage: "1",
              abilities: ["Heavy"],
            },
            {
              name: "Strangleweb",
              range: '18"',
              attacks: "D6",
              bs: "N/A",
              strength: "2",
              ap: "0",
              damage: "1",
              abilities: ["Assault", "Devastating Wounds", "Torrent"],
            },
            {
              name: "Termagant Devourer",
              range: '18"',
              attacks: "2",
              bs: "4+",
              strength: "4",
              ap: "0",
              damage: "1",
              abilities: [],
            },
            {
              name: "Termagant Spinefists",
              range: '12"',
              attacks: "2",
              bs: "4+",
              strength: "3",
              ap: "0",
              damage: "1",
              abilities: ["Assault", "Pistol", "Twin-linked"],
            },
          ],
          melee: [
            {
              name: "Chitinous claws and teeth",
              range: "Melee",
              attacks: "1",
              ws: "4+",
              strength: "3",
              ap: "0",
              damage: "1",
              abilities: [],
            },
          ],
        },
        abilities: {
          core: [],
          faction: [{ name: "Synapse" }],
          datasheet: [
            {
              name: "Skulking Horrors",
              value:
                'Once per turn, when an enemy unit ends a Normal, Advance, or Fall Back move within 9" of this unit, if this unit is not within Engagment Range of one or more enemy units, it can make a Normal move of up to D6"',
            },
          ],
        },
      },
    },
  ],
  infantry: [],
  monstersAndVechicles: [],
  deticatedTransport: [],
  other: [],
};
