var perks = [
    {
        special: 'st',
        perks: [
            {
                rank: 1,
                name: 'Iron Fist',
                img: 'iron-fist.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Channel your chi to unleash devastating fury! Punching attacks now do 20% more damage.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'Punching attacks now do 40% more damage and can disarm your opponent.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: 'Punching attacks now do 60% more damage. Unarmed Power Attacks have a chance to cripple one of your opponent\'s limbs.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: 'Attacks made with fists or weapons worn on the hands 80% more damage. Unarmed Power Attacks have an increased chance to cripple one of your opponent\'s limbs.'
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: 'Attacks made with fists or weapons worn on the hands inflict 100% more damage. Criticals in V.A.T.S. will paralyse your opponents.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Big Leagues',
                img: 'big-leagues.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Swing for the fences! Do 20% more melee weapon damage.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'You now do 40% more melee weapon damage and gain a chance to disarm your opponent.'
                    },
                    {
                        rank: 3,
                        level: 15,
                        description: 'You now do 60% more melee weapon damage and gain an increased chance to disarm your opponent.'
                    },
                    {
                        rank: 4,
                        level: 27,
                        description: 'You now do 80% more melee weapon damage and hit all targets in front of you.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: 'You now do double damage with a melee weapon, and gain a chance to cripple your opponent, or grand slam their head clean off!'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Armorer',
                img: 'armorer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Protect yourself from the dangers of the Wasteland with access to base level and Rank 1 armor mods.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: 'You gain access to Rank 2 armor mods'
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: 'You gain access to Rank 3 armor mods'
                    },
                    {
                        rank: 4,
                        level: 39,
                        description: 'You gain access to Rank 4 armor mods'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Blacksmith',
                img: 'blacksmith.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Fire up the forge and gain access to base level and Rank 1 melee weapon mods.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: 'You gain access to Rank 2 melee weapon mods'
                    },
                    {
                        rank: 3,
                        level: 29,
                        description: 'You gain access to Rank 3 melee weapon mods'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Heavy Gunner',
                img: 'heavy-gunner.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Thanks to practice and conditioning, heavy guns do 20% more damage.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: 'Heavy guns now do 40% more damage, and have improved hip fire accuracy.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: 'Heavy guns now do 60% more damage. Hip fire accuracy is increased even more.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: 'Heavy guns now do 80% more damage and have a chance to stagger your opponent.'
                    },
                    {
                        rank: 5,
                        level: 47,
                        description: 'Heavy guns now do double damage.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Strong Back',
                img: 'strong-back.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'What are you, part pack mule? Gain +25 to carry weight'
                    },
                    {
                        rank: 2,
                        level: 10,
                        description: 'You now have +50 to carry weight.'
                    },
                    {
                        rank: 3,
                        level: 20,
                        description: 'When overencumbered, you can use Action Points to run.'
                    },
                    {
                        rank: 4,
                        level: 30,
                        description: 'When overencumbered, you can fast travel.'
                    },
                    {
                        rank: 5,
                        level: 40,
                        description: 'When overencumbered, running costs 50% less action points.(Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Steady Aim',
                img: 'steady-aim.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Stay on target! Hip-fire accuracy is improved when firing any gun.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: 'Hip-fire accuracy is improved even more when firing any gun.'
                    },
                    {
                        rank: 3,
                        level: 49,
                        description: 'Hip-fire accuracy is improved when firing any gun.(Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Basher',
                img: 'basher.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Get up close and personal! Gun bashing does 25% more damage.'
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: 'Gun bashing now does 50% more damage and possibly cripples your opponent.'
                    },
                    {
                        rank: 3,
                        level: 14,
                        description: 'Gun bashing now does 75% more damage and has an increased chance to cripple your opponent.'
                    },
                    {
                        rank: 4,
                        level: 26,
                        description: 'Gun bashing does double damage and has an increased chance to cripple your opponent. It may also inflict a Critical Hit.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Rooted',
                img: 'rooted.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'re part tree! While standing still, you gain +25 Damage Resistance and your melee and unarmed attacks deal 25% more damage.'
                    },
                    {
                        rank: 2,
                        level: 22,
                        description: 'While standing still, you now gain +50 Damage Resistance and your melee and unarmed attacks deal 50% more damage.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: 'While standing still, you may automatically disarm enemies that use melee weapons against you.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Pain Train',
                img: 'pain-train.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Choo Choo! All aboard! While wearing Power Armor,sprinting into enemies hurts and staggers them. (Robots and oversized enemies are immune to the stagger.)'
                    },
                    {
                        rank: 2,
                        level: 24,
                        description: 'Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger. (Robots and oversized enemies are immune to the stagger.)'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'Sprinting into enemies while wearing Power Armor now causes massive damage and knocks them down. Impact landing near enemies inflicts even more damage.'
                    }
                ]
            }
        ]
    },
    {
        special: 'pe',
        perks: [
            {
                rank: 1,
                name: 'Pickpocket',
                img: 'pickpocket.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Your quick hands and sticky fingers make picking pockets 25% easier.'
                    },
                    {
                        rank: 2,
                        level: 6,
                        description: 'Picking pockets is now 50% easier. You can place a live grenade in a person\'s inventory.'
                    },
                    {
                        rank: 3,
                        level: 17,
                        description: 'Picking pockets is now 75% easier, and you can steal equipped weapons.'
                    },
                    {
                        rank: 4,
                        level: 30,
                        description: 'Picking pockets is now twice as easy, and you can steal equipped items.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Rifleman',
                img: 'rifleman.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Keep your distance long and your kill-count high. Attacks with non-automatic rifles do 20% more damage'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'Attacks with non-automatic rifles do 40% more damage and ignore 15% of a target\'s armor.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: 'Attacks with non-automatic rifles do 60% more damage and ignore 20% of a target\'s armor.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: 'Attacks with non-automatic rifles do 80% more damage and ignore 25% of a target\'s armor. They also have a slight chance of crippling a limb.'
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: 'Attacks with non-automatic rifles do double damage and ignore 30% of a target\'s armor. They also have a slightly higher chance of crippling a limb.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Awareness',
                img: 'awareness.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'To defeat your enemies, know their weaknesses! You can view a target\'s specific damage resistances in V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: 'Knowing their weaknesses lets you attack more efficiently. 5% increase to hit chance and damage dealt to VATS targets.(Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Locksmith',
                img: 'locksmith.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Your nimble fingers allow you to pick advanced locks.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'You can pick Expert locks.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: 'You can pick Master locks.'
                    },
                    {
                        rank: 4,
                        level: 41,
                        description: 'Your bobby pins never break during lockpicking.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Demolition Expert',
                img: 'demolition-expert.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'The bigger the boom, the better! Your explosives do 25% more damage, and you can craft explosives at any Chemistry Station.'
                    },
                    {
                        rank: 2,
                        level: 10,
                        description: 'Your explosives do 50% more damage, and grenades gain a throwing arc.'
                    },
                    {
                        rank: 3,
                        level: 22,
                        description: 'Your explosives do 75% more damage and affect a larger area.'
                    },
                    {
                        rank: 4,
                        level: 34,
                        description: 'Your explosives now do double damage. Mines and grenades shot in V.A.T.S explode for double damage, too.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Night Person',
                img: 'night-person.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.'
                    },
                    {
                        rank: 2,
                        level: 25,
                        description: 'You now have +3 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m., and night vision when sneaking.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        description: 'You have 30 extra health between the hours of 6:00 PM and 6:00 AM.(Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Refractor',
                img: 'refractor.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You must be part mirror! Instantly gain +10 Energy Resistance.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: 'You now have +20 Energy Resistance.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: 'You now have +30 Energy Resistance.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: 'You now have +40 Energy Resistance.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: 'You now have +50 Energy Resistance.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Sniper',
                img: 'sniper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'It\'s all about focus. You have improved control and can hold your breath longer when aiming with scopes.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: 'Non-automatic, scoped rifles have a chance of knocking down your target.'
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: 'Non-automatic, scoped rifles gain +25% accuracy to head shot in V.A.T.S.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Penetrator',
                img: 'penetrator.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'There\'s no place to hide! In V.A.T.S you can target an enemy\'s body parts that are blocked by cover, with a decrease in accuracy.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: 'In V.A.T.S when you target an enemy\'s body parts that are blocked by cover, there is no decrease in accuracy.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Concentrated Fire',
                img: 'concentrated-fire.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Stay Focused! In V.A.T.S every attack on the same body part gains +10% accuracy.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        description: 'In V.A.T.S every attack on the same body part gains +15% accuracy.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'In V.A.T.S every attack on the same body part gains +20% accuracy and does 20% more damage.'
                    }
                ]
            }
        ]
    },
    {
        special: 'en',
        perks: [
            {
                rank: 1,
                name: 'Toughness',
                img: 'toughness.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'If nothing else, you can take a beating! Instantly gain +10 Damage Resistance'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'You now have +20 damage resistance.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: 'You now have +30 damage resistance.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: 'You now have +40 damage resistance.'
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: 'You now have +50 damage resistance.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Lead Belly',
                img: 'lead-belly.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Your digestive tract has adjusted to the weirdness of the Wasteland! Take less radiation from eating or drinking.'
                   },
                   {
                       rank: 2,
                       level: 6,
                       description: 'You take even less radiation from eating or drinking.'
                   },
                   {
                       rank: 3,
                       level: 17,
                       description: 'You take no radiation from eating or drinking.'
                   }
                ]
            },
            {
                rank: 3,
                name: 'Life Giver',
                img: 'life-giver.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'You embody wellness! Instantly gain +20 maximum Health.'
                   },
                   {
                       rank: 2,
                       level: 8,
                       description: 'You instantly gain another +20 maximum Health.'
                   },
                   {
                       rank: 3,
                       level: 20,
                       description: 'You instantly gain another +20 maximum Health, and slowly regenerate lost Health.'
                   }
                ]
            },
            {
                rank: 4,
                name: 'Chem Resistant',
                img: 'chem-resistant.png',
                ranks: 2,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'All the rush without the hassle! You\'re 50% less likely to get addicted when consuming Chems'
                   },
                   {
                       rank: 2,
                       level: 22,
                       description: 'You gain complete immunity to chem addiction.'
                   }
                ]
            },
            {
                rank: 5,
                name: 'Aquaboy',
                img: 'aquaboy.png',
                ranks: 2,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Water is your ally. You no longer take radiation damage from swimming, and can breathe underwater'
                   },
                   {
                       rank: 2,
                       level: 21,
                       description: 'You become totally undetectable while submerged.'
                   }
                ]
            },
            {
                rank: 6,
                name: 'Rad Resistant',
                img: 'rad-resistant.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Exposure to the Wasteland has made you more resilient, instantly granting +10 Radiation Resistance.'
                   },
                   {
                       rank: 2,
                       level: 13,
                       description: 'You now have +20 Radiation Resistance.'
                   },
                   {
                       rank: 3,
                       level: 26,
                       description: 'You now have +30 Radiation Resistance.'
                   },
                   {
                       rank: 4,
                       level: 35,
                       description: 'You now have +40 Radiation Resistance. (Far Harbor DLC)'
                   }
                ]
            },
            {
                rank: 7,
                name: 'Adamantium Skeleton',
                img: 'adamantium-skeleton.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Your skeleton has been infused with indestructible metal, reducing limb damage by 30%.'
                   },
                   {
                       rank: 2,
                       level: 13,
                       description: 'Your limb damage is now reduced by 60%.'
                   },
                   {
                       rank: 3,
                       level: 26,
                       description: 'Your limb damage is completely eliminated.'
                   }
                ]
            },
            {
                rank: 8,
                name: 'Cannibal',
                img: 'cannibal.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Feast on mortal flesh to heal your wounds! Eating human corpses restores Health.'
                   },
                   {
                       rank: 2,
                       level: 19,
                       description: 'Eating Ghoul or Super Mutant corpses restores Health.'
                   },
                   {
                       rank: 3,
                       level: 38,
                       description: 'Eating human, Ghoul or Super Mutant corpses now restores a significant amount of Health.'
                   }
                ]
            },
            {
                rank: 9,
                name: 'Ghoulish',
                img: 'ghoulish.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Sure, you\'re still human - on the outside! Radiation now regenerates your lost Health.'
                   },
                   {
                       rank: 2,
                       level: 24,
                       description: 'Radiation now regenerates even more of your lost Health.'
                   },
                   {
                       rank: 3,
                       level: 48,
                       description: 'Radiation now regenerates even more of your lost Health, and some Feral Ghouls will randomly become friendly.'
                   },
                   {
                       rank: 4,
                       level: 50,
                       description: 'Rad damage will now begin to slowly heal, restoring health in the process. (Nuka-World DLC)'
                   } 
                ]
            },
            {
                rank: 10,
                name: 'Solar Powered',
                img: 'solar-powered.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Catch some rays! Gain +2 to Strength and Endurance between the hours of 6:00a.m. and 6:00p.m.'
                   },
                   {
                       rank: 2,
                       level: 27,
                       description: 'Sunlight slowly heals your radiation damage.'
                   },
                   {
                       rank: 3,
                       level: 50,
                       description: 'Sunlight slowly regenerates your lost Health.'
                   }
                ]
            }
        ]
    },
    {
        special: 'ch',
        perks: [
            {
                rank: 1,
                name: 'Cap Collector',
                img: 'cap-collector.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'ve mastered the art of the deal! Buying and selling prices at vendors are better.'
                    },
                    {
                        rank: 2,
                        level: 20,
                        description: 'Buying and selling prices of vendors are now much better.'
                    },
                    {
                        rank: 3,
                        level: 41,
                        description: 'You can now invest a total of 500 caps to raise a store\'s buying capacity.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Lady Killer',
                img: 'lady-killer-man-hunter.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'re charming... and dangerous. Men/Women suffer +5% damage in combat, and are easier to persuade in dialogue.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'Men/Women now suffer +10% damage in combat, and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.'
                    },
                    {
                        rank: 3,
                        level: 16,
                        description: 'Men/Women now suffer +15% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Lone Wanderer',
                img: 'lone-wanderer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Who needs friends, anyway? When adventuring without a companion, you take 15% less damage and carry weight increases by 50.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: 'When adventuring without a companion, you take 20% less damage and carry weight increases by 100'
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: 'When adventuring without a companion, you do 25% more damage.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: 'When adventuring without a companion, you have 25 more action points.(Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Attack Dog',
                img: 'attack-dog.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Your faithful canine companion can hold an enemy, giving you a greater chance to hit them in V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'When your dog holds an enemy, there\'s a chance he\'ll cripple the limb he\'s biting.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: 'When your dog holds an enemy, there\'s a chance he\'ll cause them to bleed.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: 'When adventuring with your dog, you take 10% less damage. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Animal Friend',
                img: 'animal-friend.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        description: 'When you successfully pacify an animal, you can incite it to attack'
                    },
                    {
                        rank: 3,
                        level: 28,
                        description: 'When you successfully pacify an animal, you can give it specific commands'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Local Leader',
                img: 'local-leader.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'As the ruler everyone turns to, you are able to establish supply lines between your workshop settlements.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: 'You can build stores and workstations at workshop settlements.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Party Boy',
                img: 'party-boy-party-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Nobody has a good time like you! There\'s no chance you\'ll get addicted to alcohol.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        description: 'The effects of alcohol are doubled.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        description: 'Your Luck is increased by 3 while you\'re under the influence of alcohol.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Inspiration',
                img: 'inspiration.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Because you lead by example, your companion does more damage in combat, and cannot hurt you.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: 'Your companion resists more damage in combat, and can\'t be harmed by your attacks.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: 'Your companion can carry more items.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Wasteland Whisperer',
                img: 'wasteland-whisperer.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Master the post-apocalypse! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it.'
                    },
                    {
                        rank: 2,
                        level: 21,
                        description: 'When you successfully pacify a creature, you can incite it to attack.'
                    },
                    {
                        rank: 3,
                        level: 49,
                        description: 'When you successfully pacify a creature, you can give it specific commands.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Intimidation',
                img: 'intimidation.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Time to show everyone who\'s boss! With your gun, aim at any human opponent below your level and gain a chance to pacify them.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        description: 'When you successfully pacify someone, you can incite them to attack.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'When you successfully pacify someone, you can give them specific commands.'
                    }
                ]
            }
        ]
    },
    {
        special: 'in',
        perks: [
            {
                rank: 1,
                name: 'V.A.N.S.',
                img: 'vans.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Let Vault-Tec guide you! The path to your closest quest target is displayed in V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 36,
                        description: 'Gain +2 to Perception. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Medic',
                img: 'medic.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Is there a doctor in the house? Stimpaks restore 40% of lost Health, and RadAway removes 40% of radiation.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        description: 'Stimpaks restore 60% of lost Health, and RadAway removes 60% of radiation'
                    },
                    {
                        rank: 3,
                        level: 30,
                        description: 'Stimpaks restore 80% of lost Health, and RadAway removes 80% of radiation'
                    },
                    {
                        rank: 4,
                        level: 49,
                        description: 'Stimpaks and RadAway restore all lost health and radiation, and work much more quickly.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Gun Nut',
                img: 'gun-nut.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You gain access to base level and Rank 1 gun mods'
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: 'You gain access to Rank 2 gun mods'
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: 'You gain access to Rank 3 gun mods'
                    },
                    {
                        rank: 4,
                        level: 39,
                        description: 'You gain access to Rank 4 gun mods'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Hacker',
                img: 'hacker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'You can hack Expert terminals.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: 'You can hack Master terminals.'
                    },
                    {
                        rank: 4,
                        level: 33,
                        description: 'When hacking, you never get locked out of a terminal when things go wrong.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Scrapper',
                img: 'scrapper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Waste not, want not! You can salvage uncommon components like screws, aluminum, and copper when scrapping weapons and armor.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        description: 'You can salvage rare components like circuitry, nuclear material, and fiber optics when scrapping weapons and armor. Items with favorited components are highlighted.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: 'You get more from salvaging. Appears to only apply to uncommon components, i.e., those affected by the first level of the perk. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Science',
                img: 'science.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: 'You gain access to Rank 2 high-tech mods.'
                    },
                    {
                        rank: 3,
                        level: 28,
                        description: 'You gain access to Rank 3 high-tech mods.'
                    },
                    {
                        rank: 4,
                        level: 41,
                        description: 'You gain access to Rank 4 high-tech mods.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Chemist',
                img: 'chemist.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Any chems you take last 50% longer. Far out.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: 'Any chems you take now last twice as long.'
                    },
                    {
                        rank: 3,
                        level: 32,
                        description: 'Any chems you take now last an additional 150% longer.'
                    },
                    {
                        rank: 4,
                        level: 45,
                        description: 'Any chems you take now last an additional 200% longer.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Robotics Expert',
                img: 'robotics-expert.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Machines will always serve humans, if you have anything to say about it. Hack a robot, and gain a chance to power it on or off, or initiate a self-destruct.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: 'When you successfully hack a robot, you can incite it to attack.'
                    },
                    {
                        rank: 3,
                        level: 44,
                        description: 'When you successfully hack a robot, you can give it specific commands.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Nuclear Physicist',
                img: 'nuclear-physicist.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'ve learned to split the atom... and command it. Radiation weapons do 50% more damage and Fusion Cores last an extra 25% longer.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: 'Radiation weapons now do double damage and Fusion Cores last an extra 50% longer.'
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: 'Fusion Cores can be ejected from Power Armor like devastating grenades and Fusion Cores last twice as long.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Nerd Rage',
                img: 'nerd-rage.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Genius. Is. ANGRY! When your Health drops below 20%, time slows and you gain +20 Damage resistance and do 20% more damage while the effect lasts.'
                    },
                    {
                        rank: 2,
                        level: 31,
                        description: 'You now gain 30 more Damage Resistance and do 30% more damage while Nerd Rage is in effect.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'You now gain 40 more Damage Resistance and do 40% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health.'
                    }
                ]
            }
        ]
    },
    {
        special: 'ag',
        perks: [
            {
                rank: 1,
                name: 'Gunslinger',
                img: 'gunslinger.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Channel the spirit of the old west! Non-automatic pistols do 20% more damage.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'Non-automatic pistols now do 40% more damage and have increased range.'
                    },
                    {
                        rank: 3,
                        level: 15,
                        description: 'Non-automatic pistols now do 60% more damage and range is increased even further.'
                    },
                    {
                        rank: 4,
                        level: 27,
                        description: 'Non-automatic pistols now do 80% more damage and their attacks can disarm opponents.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: 'Non-automatic pistols now do double damage. Their attacks have a much better chance to disarm opponents, and may even cripple a limb.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Commando',
                img: 'commando.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Rigorous combat training means automatic weapons do 20% more damage'
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: 'Attacks with automatic weapons do 40% more damage, with improved hip fire accuracy.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: 'Attacks with automatic weapons do 60% more damage. Hip fire accuracy is improved even more.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: 'Attacks with automatic weapons do 80% more damage and gain a chance to stagger opponents.'
                    },
                    {
                        rank: 5,
                        level: 49,
                        description: 'Your automatic weapons now do double damage and have a greater chance to stagger opponents.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Sneak',
                img: 'sneak.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Become whisper, become shadow. You are 20% harder to detect while sneaking.'
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: 'You are now 30% harder to detect while sneaking, and no longer trigger floor-based traps.'
                    },
                    {
                        rank: 3,
                        level: 12,
                        description: 'You are now 40% harder to detect while sneaking, and no longer trigger enemy mines.'
                    },
                    {
                        rank: 4,
                        level: 23,
                        description: 'You are now 50% harder to detect while sneaking, and running no longer adversely affects stealth.'
                    },
                    {
                        rank: 5,
                        level: 38,
                        description: 'Engaging stealth causes distant enemies to lose you.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Mister Sandman',
                img: 'mister-sandman.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'As an agent of death, you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: 'Your silenced weapons do an additional 30% sneak attack damage.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        description: 'Your silenced weapons now do 50% more sneak attack damage.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Action Boy',
                img: 'action-boy-action-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'There\'s no time to waste! Action Points regenerate 25% faster.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        description: 'Your Action Points now regenerate 50% faster.'
                    },
                    {
                        rank: 3,
                        level: 38,
                        description: 'Your Action Points now regenerate 75% faster. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Moving Target',
                img: 'moving-target.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'They can\'t hurt what they can\'t hit! Get 25+ Damage Resistance and 25+ Energy Resistance when you\'re sprinting.'
                    },
                    {
                        rank: 2,
                        level: 24,
                        description: 'You now get +50 Damage Resistance and +50 Energy Resistance when you\'re sprinting.'
                    },
                    {
                        rank: 3,
                        level: 44,
                        description: 'Sprinting costs 50% fewer Action Points.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Ninja',
                img: 'ninja.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Trained as a shadow warrior, your ranged sneak attack do 2.5x normal damage and your melee attacks do 4x normal damage.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: 'Your ranged sneak attacks do 3x normal damage and your melee sneak attacks do 5x normal damage.'
                    },
                    {
                        rank: 3,
                        level: 33,
                        description: 'Your ranged sneak attacks do 3.5x normal damage and your melee sneak attacks do 10x normal damage.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Quick Hands',
                img: 'quick-hands.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'In combat, there\'s no time to hesitate. You can reload all guns faster.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: 'Reloading guns costs no Action Points in V.A.T.S.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: 'Quick and efficient. You gain 10 additional Action Points. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Blitz',
                img: 'blitz.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Find the gap and make the tackle! V.A.T.S. melee distance is increased significantly.'
                    },
                    {
                        rank: 2,
                        level: 29,
                        description: 'V.A.T.S. melee distance is increased even more, and the farther the Blitz distance, the greater the damage.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Gun Fu',
                img: 'gun-fu.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'ve learned to apply ancient martial arts to gunplay! Do 25% more damage to your second V.A.T.S. target and beyond.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        description: 'In V.A.T.S. you do 50% more damage to your third target and beyond.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'In V.A.T.S. you instantly do a Critical Hit against your fourth target and beyond.'
                    }
                ]
            }
        ]
    },
    {
        special: 'lu',
        perks: [
            {
                rank: 1,
                name: 'Fortune Finder',
                img: 'fortune-finder.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You find more bottle caps in containers.'
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: 'You find even more bottle caps in containers.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: 'You find even more bottle caps in containers.'
                    },
                    {
                        rank: 4,
                        level: 40,
                        description: 'You find even more bottle caps in containers, and there is a chance of enemies exploding into a shower of caps when you kill them.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Scrounger',
                img: 'scrounger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You find more ammunition in containers.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'You find even more ammunition in containers.'
                    },
                    {
                        rank: 3,
                        level: 24,
                        description: 'You find even more ammunition in containers.'
                    },
                    {
                        rank: 4,
                        level: 37,
                        description: 'You find even more ammunition in containers.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Bloody Mess',
                img: 'bloody-mess.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: '+5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'You now inflict +10% damage in combat.'
                    },
                    {
                        rank: 3,
                        level: 31,
                        description: 'You now inflict +15% damage in combat.'
                    },
                    {
                        rank: 4,
                        level: 47,
                        description: 'When an enemy explodes, nearby enemies may suffer the same fate.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Mysterious Stranger',
                img: 'mysterious-stranger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand, with deadly efficiency...'
                    },
                    {
                        rank: 2,
                        level: 22,
                        description: 'The Mysterious Stranger appears more often in V.A.T.S.'
                    },
                    {
                        rank: 3,
                        level: 41,
                        description: 'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a chance your Critical meter gets filled.'
                    },
                    {
                        rank: 4,
                        level: 49,
                        description: 'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a high chance your Critical meter gets filled. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Idiot Savant',
                img: 'idiot-savant.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'re not stupid! Just... different. Randomly receive 3x XP from any action, and the lower your Intelligence, the greater the chance.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: 'You now randomly receive 5x XP from any action. The lower your Intelligence, the greater the chance.'
                    },
                    {
                        rank: 3,
                        level: 34,
                        description: 'Randomly receiving bonus XP from any action may trigger 3x XP for all kills for a short period of time. The lower your Intelligence, the greater the chance.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Better Criticals',
                img: 'better-criticals.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        description: 'Your criticals now do twice as much extra damage.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: 'Your criticals now do 2.5x as much extra damage.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Critical Banker',
                img: 'critical-banker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'re a patient battlefield tactician, and can save a Critical Hit, to be used in V.A.T.S. when you need it most.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: 'You can now save 2 Critical Hits, to be used in V.A.T.S. when you need them the most.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: 'You can now save 3 Critical Hits, to be used in V.A.T.S. when you need them the most. Banking a Critical has a chance to save an additional Critical.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: 'You can now save 4 Critical Hits, to be used in V.A.T.S. when you need them the most. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Grim Reaper\'s Sprint',
                img: 'grim-reapers-sprint.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Death becomes you! Any kill in V.A.T.S. has a 15% chance to restore all Action Points.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: 'Any kill in V.A.T.S. now has a 25% chance to restore all Action Points.'
                    },
                    {
                        rank: 3,
                        level: 46,
                        description: 'Any kill in V.A.T.S. has a 35% chance to restore all Action Points and refill your Critical meter.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Four Leaf Clover',
                img: 'four-leaf-clover.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Feeling Lucky? You should! Each hit in V.A.T.S. has a chance of filling your Critical meter.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: 'Each hit in V.A.T.S. now has an even better chance of filling your Critical meter.'
                    },
                    {
                        rank: 3,
                        level: 32,
                        description: 'Each hit in V.A.T.S. now has a very good chance of filling your Critical meter.'
                    },
                    {
                        rank: 4,
                        level: 48,
                        description: 'Each hit in V.A.T.S. now has an excellent chance of filling your Critical meter.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Ricochet',
                img: 'ricochet.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'What goes around comes around! Any enemy\'s ranged attacks will sometimes ricochet back and instantly kill them. The closer you are to death, the higher the chance.'
                    },
                    {
                        rank: 2,
                        level: 29,
                        description: 'There\'s an increased chance that an enemy\'s shot will ricochet back and kill them.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'When an enemy\'s shot ricochets back and kills them, there is a chance your Critical meter gets filled.'
                    }
                ]
            }
        ]
    }
];
