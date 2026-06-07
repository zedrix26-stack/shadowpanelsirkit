(function() {
   const RAW_CATALOG = [
      { id: 1, name: "Phonopolis", category: "Adventure", thumb: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4uyw.jpg", downloadUrl: "https://bzzhr.to/4is071av60w6", desc: "Musical retro adventure" },
      { id: 2, name: "Cyberpunk 2077", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg", downloadUrl: "https://bzzhr.to/u33dxmmaozb6", desc: "Night City open-world RPG" },
      { id: 3, name: "Elden Ring", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg", downloadUrl: "https://bzzhr.to/u4w8cunxkbrz", desc: "Epic dark fantasy" },
      { id: 4, name: "Red Dead Redemption 2", category: "Adventure", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ck7nob6r1bcv", desc: "Outlaw Wild West" },
      { id: 5, name: "Baldur's Gate 3", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg", downloadUrl: "https://bzzhr.to/g2c2uubvr8mt", desc: "Tactical RPG masterpiece" },
      { id: 6, name: "The Callisto Protocol", category: "Horror", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1544020/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ybdn7l807975", desc: "Terrifying space prison" },
      { id: 7, name: "Hogwarts Legacy", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/library_600x900.jpg", downloadUrl: "https://bzzhr.to/sqsvm6qwnpnf", desc: "Wizarding world 1800s" },
      { id: 8, name: "Battlefield 2042", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1517290/library_600x900.jpg", downloadUrl: "https://bzzhr.to/wb34m83386ee", desc: "All-out warfare" },
      { id: 9, name: "Ghostwire: Tokyo", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1475810/library_600x900.jpg", downloadUrl: "https://bzzhr.to/4dotzn3l5304", desc: "Supernatural thriller" },
      { id: 10, name: "Forza Horizon 5", category: "Racing", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg", downloadUrl: "https://bzzhr.to/od5lrbi5f9nr", desc: "Mexico racing paradise" },
      { id: 11, name: "God of War", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900.jpg", downloadUrl: "https://bzzhr.to/lrtuuu7e0e73", desc: "Norse mythology journey" },
      { id: 12, name: "Titanfall 2", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1237970/library_600x900.jpg", downloadUrl: "https://bzzhr.to/dx2fzxxlbxdf", desc: "Mech fast combat" },
      { id: 13, name: "The Witcher 3", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg", downloadUrl: "https://bzzhr.to/wge5xqrqagzc", desc: "Monster hunter" },
      { id: 14, name: "Hades", category: "Indie", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/library_600x900.jpg", downloadUrl: "https://bzzhr.to/3tanwgo44h51", desc: "Roguelike defy death" },
      { id: 15, name: "Control", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/870780/library_600x900.jpg", downloadUrl: "https://bzzhr.to/5tnm97mt6ql1", desc: "Brutalist secrets" },
      { id: 16, name: "Lies of P", category: "Souls-like", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1627720/library_600x900.jpg", downloadUrl: "https://bzzhr.to/fp0y3rkv07bt", desc: "Dark Pinocchio" },
      { id: 17, name: "Marvel's Spider-Man", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/library_600x900.jpg", downloadUrl: "https://bzzhr.to/716go6imtzta", desc: "Web-swing NYC" },
      { id: 18, name: "The Last of Us Part I", category: "Survival", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/library_600x900.jpg", downloadUrl: "https://bzzhr.to/z409lxi8ia60", desc: "Post-apocalyptic" },
      { id: 19, name: "Resident Evil Village", category: "Horror", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1196590/library_600x900.jpg", downloadUrl: "https://bzzhr.to/f6jmxld7l5bb", desc: "Survival horror" },
      { id: 20, name: "Disco Elysium", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/632470/library_600x900.jpg", downloadUrl: "https://bzzhr.to/xuix9ww1zxdy", desc: "Detective RPG" },
      { id: 21, name: "Starfield", category: "Sci-Fi", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/library_600x900.jpg", downloadUrl: "https://bzzhr.to/gcybmedu43qw", desc: "Bethesda space RPG" },
      { id: 22, name: "Maneater", category: "Action", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUutB4hdjhV5G0bW2jeS7FnNKlNWLVnMQx8w&s", downloadUrl: "https://bzzhr.to/dfrc3xm0k4aj", desc: "Shark evolution" },
      { id: 23, name: "Halo Infinite", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ahgxqh1krhhr", desc: "Master Chief returns" },
      { id: 24, name: "Returnal", category: "Roguelike", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1649240/library_600x900.jpg", downloadUrl: "https://bzzhr.to/55tx9hxmqby5", desc: "Alien time loop" },
      { id: 25, name: "Death Stranding", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1190460/library_600x900.jpg", downloadUrl: "https://bzzhr.to/plti1lbpecg2", desc: "Reconnect America" },
      { id: 26, name: "NARUTO: Ultimate Ninja STORM", category: "Fighting", thumb: "https://m.media-amazon.com/images/M/MV5BNzg5OTZhZjUtMmEwOC00ZGI1LTljOTgtNDMzMTA1YjlhNDA2XkEyXkFqcGc@._V1_.jpg", downloadUrl: "https://bzzhr.to/u9jwn92hljni", desc: "Anime fighting" },
      { id: 27, name: "Atomic Heart", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/668580/library_600x900.jpg", downloadUrl: "https://bzzhr.to/g8k2ooemjemk", desc: "Soviet robot fury" },
      { id: 28, name: "Sekiro", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/library_600x900.jpg", downloadUrl: "https://bzzhr.to/bpf4xp9ptrlv", desc: "Shinobi masterpiece" },
      { id: 29, name: "Outer Wilds", category: "Exploration", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/753640/library_600x900.jpg", downloadUrl: "https://bzzhr.to/z6s8iivvuogm", desc: "Time loop mystery" },
      { id: 30, name: "Hollow Knight", category: "Indie", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900.jpg", downloadUrl: "https://bzzhr.to/h22jtc3h54d7", desc: "Insect kingdom" },
      { id: 31, name: "Stray", category: "Adventure", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1332010/library_600x900.jpg", downloadUrl: "https://bzzhr.to/l4qu35mx12ff", desc: "Cyber cat journey" },
      { id: 32, name: "Sifu", category: "Fighting", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2138710/library_600x900.jpg", downloadUrl: "https://bzzhr.to/fx56v77o7kqx", desc: "Kung fu revenge" },
      { id: 33, name: "Tunic", category: "Adventure", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553420/library_600x900.jpg", downloadUrl: "https://bzzhr.to/lqr8wcqgczir", desc: "Fox adventure" },
      { id: 34, name: "Inscryption", category: "Card Game", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1092790/library_600x900.jpg", downloadUrl: "https://bzzhr.to/359mivnw7qe8", desc: "Dark roguelike cards" },
      { id: 35, name: "Celeste", category: "Platformer", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/504230/library_600x900.jpg", downloadUrl: "https://bzzhr.to/fr8u2g2cbyus", desc: "Mountain climb" },
      { id: 36, name: "Cuphead", category: "Platformer", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268910/library_600x900.jpg", downloadUrl: "https://bzzhr.to/n6odzuvudocs", desc: "1930s run&gun" },
      { id: 37, name: "It Takes Two", category: "Co-op", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ue1lr8hfi2ma", desc: "Couple adventure" },
      { id: 38, name: "Deathloop", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1252330/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ic57ee0u5u0t", desc: "Stylish time loop" },
      { id: 39, name: "Prey", category: "Sci-Fi", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/480490/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ey09ucebbcn2", desc: "Space station horror" },
      { id: 40, name: "Doom Eternal", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/782330/library_600x900.jpg", downloadUrl: "https://bzzhr.to/vfne9aovpd81", desc: "Rip and tear" },
      { id: 41, name: "Ghostrunner", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1139900/library_600x900.jpg", downloadUrl: "https://bzzhr.to/39ggvh410daz", desc: "One-hit kills" },
      { id: 42, name: "Subnautica", category: "Survival", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/264710/library_600x900.jpg", downloadUrl: "https://bzzhr.to/2ige9h31jgcc", desc: "Alien ocean" },
      { id: 43, name: "No Man's Sky", category: "Exploration", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/library_600x900.jpg", downloadUrl: "https://bzzhr.to/j3uiwikp1rck", desc: "Infinite universe" },
      { id: 44, name: "Valheim", category: "Survival", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/library_600x900.jpg", downloadUrl: "https://gofile.io/d/BDQUnz", desc: "Viking purgatory" },
      { id: 45, name: "Deep Rock Galactic", category: "Co-op", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/548430/library_600x900.jpg", downloadUrl: "https://bzzhr.to/wwy4jrtr0n56", desc: "Space dwarf mining" },
      { id: 46, name: "Terraria", category: "Sandbox", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/library_600x900.jpg", downloadUrl: "https://gofile.io/d/SbUsKd", desc: "2D sandbox" },
      { id: 47, name: "Minecraft", category: "Sandbox", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1672970/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ddrgxeyw5au2", desc: "Blocky survival" },
      { id: 48, name: "Palworld", category: "Survival", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/library_600x900.jpg", downloadUrl: "https://bzzhr.to/hut5tm9ud5vb", desc: "Monster capture survival" },
      { id: 49, name: "Lethal Company", category: "Horror", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/library_600x900.jpg", downloadUrl: "https://gofile.io/d/jMI5xb", desc: "Scavenge horror" },
      { id: 50, name: "Helldivers 2", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/library_600x900.jpg", downloadUrl: "https://bzzhr.to/pgm0h864s2jk", desc: "Co-op alien war" },
      { id: 51, name: "Tekken 7", category: "Fighting", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/389730/library_600x900.jpg", downloadUrl: "https://bzzhr.to/dwvu7c0fuz4k", desc: "Iron fist tournament" },
      { id: 52, name: "Sea of Thieves", category: "Adventure", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/library_600x900.jpg", downloadUrl: "https://bzzhr.to/1ganqcr8iohx", desc: "Pirate sandbox" },
      { id: 53, name: "Monster Hunter World", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/582010/library_600x900.jpg", downloadUrl: "https://gofile.io/d/TUQIGC", desc: "Epic monster hunts" },
      { id: 54, name: "Dark Souls III", category: "Souls-like", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/library_600x900.jpg", downloadUrl: "https://bzzhr.to/97ki7d4o0n3w", desc: "Relentless combat" },
      { id: 55, name: "Mortal Kombat 11", category: "Fighting", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/976310/library_600x900.jpg", downloadUrl: "https://bzzhr.to/kqg860gm6uqh", desc: "Brutal fatalities" },
      { id: 56, name: "Street Fighter V", category: "Fighting", thumb: "https://upload.wikimedia.org/wikipedia/en/8/80/Street_Fighter_V_box_artwork.png", downloadUrl: "https://bzzhr.to/ddm8wvisthoh", desc: "Legendary fighting" },
      { id: 57, name: "FIFA 23", category: "Sports", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1811260/library_600x900.jpg", downloadUrl: "https://bzzhr.to/zmasjuexf733", desc: "Football simulation" },
      { id: 58, name: "NBA 2K23", category: "Sports", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdtk-s-lj07LPLCmz7MOuWDyAjac59RfjPXz0KbsBXUppJLjIGhP49Z1HaBXBmJg57esbsg&s=10", downloadUrl: "https://bzzhr.to/u87xysolly06", desc: "NBA experience" },
      { id: 59, name: "GTA V", category: "Open World", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg", downloadUrl: "https://bzzhr.to/y3urdxf9h7qs", desc: "Los Santos heists" },
      { id: 60, name: "Watch Dogs Legion", category: "Open World", thumb: "https://upload.wikimedia.org/wikipedia/en/d/dc/Watch_Dogs_Legion_cover_art.webp", downloadUrl: "https://bzzhr.to/3is42p5qk08o", desc: "Hack London" },
      { id: 61, name: "Assassin's Creed Valhalla", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2208920/library_600x900.jpg", downloadUrl: "https://bzzhr.to/u31t4e6ce6pj", desc: "Viking raids" },
      { id: 62, name: "Far Cry 6", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2369390/library_600x900.jpg", downloadUrl: "https://bzzhr.to/yam0smah3pin", desc: "Revolution shooter" },
      { id: 63, name: "Rainbow Six Siege", category: "Tactical", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/library_600x900.jpg", downloadUrl: "https://bzzhr.to/78jt3u9xlpk2", desc: "Tactical shooter" },
      { id: 64, name: "NARUTO SHIPPUDEN: Storm 2", category: "Fighting", thumb: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/narutoshippudenultimateninjastorm2.png", downloadUrl: "https://datanodes.to/u6pel9e3ulvu/Naruto-Shippuden-Ultimate-Ninja-Storm-2.rar", desc: "Anime brawler" },
      { id: 65, name: "Shadow of Tomb Raider", category: "Action", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9Sp6u2tNPdSKSt9nMKBmMs1NH7WOannFDjEBGwYm26ExuxMDsL4HEyqPBU6NIinxE8WV&s=10", downloadUrl: "https://bzzhr.to/9oi54d06m9ca", desc: "Lara Croft epic" },
      { id: 66, name: "Diablo II Resurrected", category: "RPG", thumb: "https://cdn.dekudeals.com/images/948589a864375b1ed3eede0711444fbf95add698/w500.jpg", downloadUrl: "https://bzzhr.to/37j7d94n211h", desc: "Classic remaster" },
      { id: 67, name: "Borderlands 3", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/397540/library_600x900.jpg", downloadUrl: "https://bzzhr.to/rjs88tc5jela", desc: "Looter shooter" },
      { id: 68, name: "X4 Foundations", category: "Simulation", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1085660/library_600x900.jpg", downloadUrl: "https://bzzhr.to/iw5bdqg0hqy5 ", desc: "Space sim" },
      { id: 69, name: "Outriders", category: "Shooter", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/680420/library_600x900.jpg", downloadUrl: "https://datanodes.to/jjhebdsnj8x9/OUTRIDERS.rar", desc: "Co-op shooter" },
      { id: 70, name: "Mass Effect Legendary", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1328670/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ncel6hqk6155", desc: "Sci-fi trilogy" },
      { id: 71, name: "Dragon Age Inquisition", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222690/library_600x900.jpg", downloadUrl: "https://bzzhr.to/286sxi1a8jde", desc: "Thedas adventure" },
      { id: 72, name: "Divinity Original Sin 2", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/435150/library_600x900.jpg", downloadUrl: "https://bzzhr.to/ml8yox360aza", desc: "Tactical RPG" },
      { id: 73, name: "Pillars of Eternity 2", category: "RPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/560130/library_600x900.jpg", downloadUrl: "https://datanodes.to/bhh2f0hg6bl5/Pillars-of-Eternity-II-Deadfire.rar", desc: "Isometric classic" },
      { id: 74, name: "Nioh 2", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1325200/library_600x900.jpg", downloadUrl: "https://bzzhr.to/l62v0as1wij8", desc: "Samurai souls" },
      { id: 75, name: "Code Vein", category: "Souls-like", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/678960/library_600x900.jpg", downloadUrl: "https://bzzhr.to/nwte63ywpuba", desc: "Anime souls" },
      { id: 76, name: "Scarlet Nexus", category: "Action", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/775500/library_600x900.jpg", downloadUrl: "https://bzzhr.to/t575ri5f4ukd", desc: "Psychokinesis" },
      { id: 77, name: "Tales of Arise", category: "JRPG", thumb: "https://m.media-amazon.com/images/M/MV5BODY4ZjRlNDItZmViZC00ZjE3LWE3NjEtY2IxMTAyMzU3YmMxXkEyXkFqcGc@._V1_.jpg", downloadUrl: "https://bzzhr.to/v32hk3obj1af", desc: "Epic JRPG" },
      { id: 78, name: "Persona 5 Royal", category: "JRPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/library_600x900.jpg", downloadUrl: "https://bzzhr.to/xe9cqng5wmpc", desc: "Phantom thieves" },
      { id: 79, name: "Final Fantasy XVI", category: "JRPG", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2515020/library_600x900.jpg", downloadUrl: "https://bzzhr.to/s2etw01mwu4l", desc: "Dark fantasy action" },
      { id: 80, name: "Dragon Ball FighterZ", category: "Fighting", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/678950/library_600x900.jpg", downloadUrl: "https://bzzhr.to/6ty0xi32bs52", desc: "3v3 anime" },
      { id: 81, name: "Naruto Storm 4", category: "Fighting", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/349040/library_600x900.jpg", downloadUrl: "https://bzzhr.to/gb4xhh25zw7q", desc: "Ultimate ninja" },
      { id: 82, name: "One Piece Odyssey", category: "JRPG", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5T6Zk-VndK0CB7BqQgaX7O_YKZ4mjri15QAenbW5o7Ubq_BsTaqHSv0AuNyK1poTg1uDjWA&s=10", downloadUrl: "https://bzzhr.to/1bueog81jiuw", desc: "Straw hat adventure" },
      { id: 83, name: "TrackDayR", category: "Racing", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2woY9XoQroG73duSuFVlwEFmchg2gV2YnA&s", downloadUrl: "https://bzzhr.to/q28rq7bd1j6l", desc: "Motorcycle sim" },
      { id: 84, name: "Carry The Glass", category: "Indie", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDe6foYmAb6txDAOqhy2PwIFnJ3Vl0iRRsrmnVKM-2BN4equU8atOw4ppplAlJkBxS8mtT&s=10", downloadUrl: "https://datanodes.to/ic485k8siuhy/Carry_The_Glass.rar", desc: "Puzzle indie" },
      { id: 85, name: "COD Modern Warfare 2", category: "Shooter", thumb: "https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png", downloadUrl: "https://bzzhr.to/ioc6p3iku6yj", desc: "Classic shooter" },
      { id: 86, name: "Escape from Tarkov", category: "Tactical", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeThEiqk_342M5b2t2LxUfHGTCb6OrMghfAV-ZrEgxKvTHRzuBpOS4CAKZWFXCddYiy0Q0Fw&s=10", downloadUrl: "https://bzzhr.to/v3b3wgf6936d", desc: "Hardcore shooter" },
      { id: 87, name: "Prototype", category: "Action", thumb: "https://upload.wikimedia.org/wikipedia/en/b/b2/PROTOTYPE.png", downloadUrl: "https://bzzhr.to/qr75mr3s9sf9", desc: "Shapeshifter carnage" },
      { id: 88, name: "DayZ", category: "Survival", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/221100/library_600x900.jpg", downloadUrl: "https://bzzhr.to/vuz7n5e0pocr", desc: "Zombie survival" },
      { id: 89, name: "Rust", category: "Survival", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/library_600x900.jpg", downloadUrl: "https://bzzhr.to/jmvrppg5p38o", desc: "Brutal multiplayer" },
      { id: 90, name: "ARK Survival Evolved", category: "Survival", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/346110/library_600x900.jpg", downloadUrl: "https://bzzhr.to/kbm2dupgc190", desc: "Dino survival" },
      { id: 91, name: "Lens Island", category: "Survival", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkMFMh1CJHXybb1lv7e6XszyqGsPvzBfW64OQpiUlknU6m-dGaRl6o9R6XxiPlcWGjJl3&s=10", downloadUrl: "https://bzzhr.to/vlbbttq2ce0z", desc: "Mystery forest" },
      { id: 92, name: "Green Hell", category: "Survival", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/815370/library_600x900.jpg", downloadUrl: "https://bzzhr.to/cfk3kb6xgdsv", desc: "Amazon survival" },
      { id: 93, name: "Planet Zoo", category: "Simulation", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/703080/library_600x900.jpg", downloadUrl: "https://bzzhr.to/czn0geghuw2l", desc: "Zoo management" },
      { id: 94, name: "Cities Skylines", category: "Simulation", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/255710/library_600x900.jpg", downloadUrl: "https://gofile.io/d/coYrVY", desc: "City builder" },
      { id: 95, name: "Stardew Valley", category: "Simulation", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/library_600x900.jpg", downloadUrl: "https://bzzhr.to/djg8400snxet", desc: "Farm life" },
      { id: 96, name: "Factorio", category: "Strategy", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/427520/library_600x900.jpg", downloadUrl: "https://gofile.io/d/agOLxt", desc: "Factory automation" },
      { id: 97, name: "Civilization V", category: "Strategy", thumb: "https://m.media-amazon.com/images/M/MV5BYzJhODQwZGYtNjc3MS00Y2EyLThjMDEtYzVjNzRlMWUzN2UwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", downloadUrl: "https://bzzhr.to/uivs589ck2d9", desc: "Turn-based empire" },
      { id: 98, name: "NightClub Simulator", category: "Simulation", thumb: "https://cdn.sidequestvr.com/file/2967333/library_600x900_2x.jpg", downloadUrl: "https://bzzhr.to/8ch0xfzgbxgu", desc: "Club management" },
      { id: 99, name: "Age of Empires IV", category: "Strategy", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1466860/library_600x900.jpg", downloadUrl: "https://bzzhr.to/fp6zpbqko0z1", desc: "Historic RTS" },
      { id: 100, name: "Hades II", category: "Roguelike", thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/library_600x900.jpg", downloadUrl: "https://gofile.io/d/l2fyry", desc: "Witch of crossroads" },
      { id: 101, name: "GTA San Andreas", category: "Open World", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOtv1ukDU4ZpbgeRxv2EIn5w5iSB5ucju7AhVF5Z3gVsWRz45wLYQ9SwWDAJPLOdEIvV2&s=10", downloadUrl: "https://bzzhr.to/798s0sck9y6i", desc: "Classic gangster" },
      { id: 102, name: "Naruto Storm 3 FB", category: "Fighting", thumb: "https://i.gadgets360cdn.com/products/large/708079-naruto-shippuden-ultimate-ninja-storm-3-full-burst-nintendo-switch-front-cover-1000x1000-1656482219.jpg", downloadUrl: "https://gofile.io/d/VXl1dd", desc: "Full Burst" },
      { id: 103, name: "Naruto Storm Connections", category: "Fighting", thumb: "https://sm.ign.com/ign_ap/cover/n/naruto-x-b/naruto-x-boruto-ultimate-ninja-storm-connections_xec3.jpg", downloadUrl: "https://bzzhr.to/pxv3wzml2uor", desc: "Ultimate connections" },
      { id: 104, name: "JUMP FORCE", category: "Fighting", thumb: "https://imgproxy.eneba.games/coyTS-ea5u6Qsb9mV-TPr8hqFWzQZSwiGf5hHdB8nDw/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9T/X2szLWhJYzZDcFlF/RndnVnRTWXJ6MWxj/c3lna2dYZHFwTlFS/eldYaEFFLmpwZWc", downloadUrl: "https://bzzhr.to/1rv0xeou6ix2", desc: "Anime crossover" },
      { id: 105, name: "Tekken 8", category: "Fighting", thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tekken_8_cover_art.jpg/250px-Tekken_8_cover_art.jpg", downloadUrl: "https://bzzhr.to/5imzy2erft79", desc: "King of fighters" },
      { id: 106, name: "NBA 2K16", category: "Sports", thumb: "https://m.media-amazon.com/images/M/MV5BOGNiZGI5NWQtNzU2Yi00MDA5LWE3NDEtOTZiODJjMWFlMDdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", downloadUrl: "https://bzzhr.to/oby3fhxede6a", desc: "Classic basketball" },
      { id: 107, name: "Marvel’s Spider-Man 2", category: "Action, Adventure", thumb: "https://static.wikia.nocookie.net/spidermanps4/images/d/d4/Marvel%27s_Spider-Man_2_front_cover_%28US%29.png/revision/latest?cb=20230608203237", downloadUrl: "https://bzzhr.to/f9wmyj6bwidy", desc: "Web-swing NYC" },
      { id: 108, name: "GTA V LITE", category: "Open World", thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gta-v-lite.png/500px-Gta-v-lite.png", downloadUrl: "https://vikingfile.com/f/bZxzaHgEu8#getea 5 lite v13.2.zip - 43.92 GB", desc: "Rockstar Games" },
      { id: 106, name: "NBA 2K17", category: "Sports", thumb: "https://upload.wikimedia.org/wikipedia/en/a/a0/NBA_2K17_cover_art.jpg", downloadUrl: "https://bzzhr.to/k7cvccq0thn0", desc: "Classic basketball" },
      { id: 106, name: "NBA 2K22", category: "Sports", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliLhHIia7kuxs_RbnMPS7TfGXzREYdTDH4-imFLrMTt915usN-o9u0QbFirjTVQWOqMba&s=10", downloadUrl: "https://bzzhr.to/ii4k0mlzwvkw", desc: "Classic basketball" },
      // ========== ID 108 to 504 (new games, dynamic thumbnails) ==========
      { id: 111, name: "1348 Ex Voto", category: "Horror", thumb: "https://m.media-amazon.com/images/M/MV5BYTJiMTJlMjAtMWRmMy00YTE3LWEzZWQtMjJlODMwNmUzNzA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", downloadUrl: "https://bzzhr.to/f9xkzwqa3wtz", desc: "Horror game" },
      
  { id: 112, name: "Elden Ring", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "The Lands Between awaits" },
  { id: 113, name: "God of War Ragnarök", category: "Action Adventure", thumb: null, downloadUrl: "#", desc: "Kratos and Atreus journey" },
  { id: 114, name: "Cyberpunk 2077", category: "RPG", thumb: null, downloadUrl: "#", desc: "Night City open world" },
  { id: 115, name: "Red Dead Redemption 2", category: "Action Adventure", thumb: null, downloadUrl: "#", desc: "Wild West epic" },
  { id: 116, name: "The Witcher 3: Wild Hunt", category: "RPG", thumb: null, downloadUrl: "#", desc: "Monster slayer Geralt" },
  { id: 117, name: "Baldur's Gate 3", category: "RPG", thumb: null, downloadUrl: "#", desc: "D&D-based CRPG" },
  { id: 118, name: "Grand Theft Auto V", category: "Action", thumb: null, downloadUrl: "#", desc: "Los Santos crime saga" },
  { id: 119, name: "Minecraft", category: "Sandbox", thumb: null, downloadUrl: "#", desc: "Build and survive" },
  { id: 120, name: "Valorant", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Tactical 5v5" },
  { id: 121, name: "Fortnite", category: "Battle Royale", thumb: null, downloadUrl: "#", desc: "Last one standing" },
  { id: 122, name: "Apex Legends", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Hero battle royale" },
  { id: 123, name: "Call of Duty: Modern Warfare II", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Military FPS" },
  { id: 124, name: "Overwatch 2", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Team-based hero shooter" },
  { id: 125, name: "League of Legends", category: "MOBA", thumb: null, downloadUrl: "#", desc: "5v5 multiplayer" },
  { id: 126, name: "Dota 2", category: "MOBA", thumb: null, downloadUrl: "#", desc: "Strategy battle arena" },
  { id: 127, name: "Counter-Strike 2", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Tactical FPS" },
  { id: 128, name: "Rainbow Six Siege", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Breach and clear" },
  { id: 129, name: "PUBG: Battlegrounds", category: "Battle Royale", thumb: null, downloadUrl: "#", desc: "Survival shooter" },
  { id: 130, name: "Among Us", category: "Party", thumb: null, downloadUrl: "#", desc: "Social deduction" },
  { id: 131, name: "Fall Guys", category: "Party", thumb: null, downloadUrl: "#", desc: "Knockout royale" },
  { id: 132, name: "Rocket League", category: "Sports", thumb: null, downloadUrl: "#", desc: "Cars playing soccer" },
  { id: 133, name: "FIFA 23", category: "Sports", thumb: null, downloadUrl: "#", desc: "Football simulation" },
  { id: 134, name: "NBA 2K23", category: "Sports", thumb: null, downloadUrl: "#", desc: "Basketball" },
  { id: 135, name: "Madden NFL 23", category: "Sports", thumb: null, downloadUrl: "#", desc: "American football" },
  { id: 136, name: "F1 22", category: "Racing", thumb: null, downloadUrl: "#", desc: "Formula One racing" },
  { id: 137, name: "Forza Horizon 5", category: "Racing", thumb: null, downloadUrl: "#", desc: "Open-world driving" },
  { id: 138, name: "Need for Speed Unbound", category: "Racing", thumb: null, downloadUrl: "#", desc: "Street racing" },
  { id: 139, name: "The Legend of Zelda: Tears of the Kingdom", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Hyrule exploration" },
  { id: 140, name: "Super Mario Odyssey", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Mario adventure" },
  { id: 141, name: "Sonic Frontiers", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Open-zone action" },
  { id: 142, name: "Crash Bandicoot 4", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Bandicoot returns" },
  { id: 143, name: "Spyro Reignited Trilogy", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Dragon adventure" },
  { id: 144, name: "Cuphead", category: "Action", thumb: null, downloadUrl: "#", desc: "Run and gun" },
  { id: 145, name: "Hades", category: "Roguelike", thumb: null, downloadUrl: "#", desc: "Escape the underworld" },
  { id: 146, name: "Dead Cells", category: "Roguelike", thumb: null, downloadUrl: "#", desc: "Metroidvania action" },
  { id: 147, name: "Slay the Spire", category: "Card Game", thumb: null, downloadUrl: "#", desc: "Deckbuilding roguelike" },
  { id: 148, name: "Monster Hunter Rise", category: "Action", thumb: null, downloadUrl: "#", desc: "Hunt giant monsters" },
  { id: 149, name: "Dark Souls III", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Challenging combat" },
  { id: 150, name: "Sekiro: Shadows Die Twice", category: "Action", thumb: null, downloadUrl: "#", desc: "Feudal Japan stealth" },
  { id: 151, name: "Bloodborne", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Gothic horror" },
  { id: 152, name: "Demon's Souls", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Remake of classic" },
  { id: 153, name: "Nioh 2", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Samurai souls-like" },
  { id: 154, name: "Ghost of Tsushima", category: "Action Adventure", thumb: null, downloadUrl: "#", desc: "Samurai open world" },
  { id: 155, name: "Horizon Forbidden West", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Machine hunter Aloy" },
  { id: 156, name: "Days Gone", category: "Action Horror", thumb: null, downloadUrl: "#", desc: "Zombie survival" },
  { id: 157, name: "The Last of Us Part I", category: "Action Adventure", thumb: null, downloadUrl: "#", desc: "Post-apocalyptic" },
  { id: 158, name: "Uncharted 4", category: "Action Adventure", thumb: null, downloadUrl: "#", desc: "Treasure hunter" },
  { id: 159, name: "Marvel's Spider-Man Remastered", category: "Action", thumb: null, downloadUrl: "#", desc: "Web-swinging hero" },
  { id: 160, name: "Marvel's Spider-Man: Miles Morales", category: "Action", thumb: null, downloadUrl: "#", desc: "Miles' story" },
  { id: 161, name: "Batman: Arkham Knight", category: "Action", thumb: null, downloadUrl: "#", desc: "Dark Knight finale" },
  { id: 162, name: "Star Wars Jedi: Fallen Order", category: "Action", thumb: null, downloadUrl: "#", desc: "Jedi survivor" },
  { id: 163, name: "Star Wars Jedi: Survivor", category: "Action", thumb: null, downloadUrl: "#", desc: "Cal Kestis returns" },
  { id: 164, name: "Hogwarts Legacy", category: "RPG", thumb: null, downloadUrl: "#", desc: "Wizarding world" },
  { id: 165, name: "The Sims 4", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Life simulation" },
  { id: 166, name: "Planet Coaster", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Theme park manager" },
  { id: 167, name: "Cities: Skylines", category: "Simulation", thumb: null, downloadUrl: "#", desc: "City builder" },
  { id: 168, name: "Two Point Campus", category: "Simulation", thumb: null, downloadUrl: "#", desc: "University management" },
  { id: 169, name: "Rollercoaster Tycoon 3", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Classic coaster sim" },
  { id: 170, name: "Farming Simulator 22", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Agricultural sim" },
  { id: 171, name: "Euro Truck Simulator 2", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Truck driving" },
  { id: 172, name: "American Truck Simulator", category: "Simulation", thumb: null, downloadUrl: "#", desc: "US trucking" },
  { id: 173, name: "Microsoft Flight Simulator", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Realistic flying" },
  { id: 174, name: "Kerbal Space Program", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Spacecraft builder" },
  { id: 175, name: "Factorio", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Factory automation" },
  { id: 176, name: "Satisfactory", category: "Strategy", thumb: null, downloadUrl: "#", desc: "3D factory building" },
  { id: 177, name: "Dyson Sphere Program", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Space industry" },
  { id: 178, name: "RimWorld", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Colony management" },
  { id: 179, name: "Oxygen Not Included", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Space colony sim" },
  { id: 180, name: "Don't Starve Together", category: "Survival", thumb: null, downloadUrl: "#", desc: "Co-op survival" },
  { id: 181, name: "Valheim", category: "Survival", thumb: null, downloadUrl: "#", desc: "Viking adventure" },
  { id: 182, name: "Grounded", category: "Survival", thumb: null, downloadUrl: "#", desc: "Shrunken kids" },
  { id: 183, name: "The Forest", category: "Horror Survival", thumb: null, downloadUrl: "#", desc: "Cannibal island" },
  { id: 184, name: "Sons of the Forest", category: "Horror Survival", thumb: null, downloadUrl: "#", desc: "Sequel to The Forest" },
  { id: 185, name: "Green Hell", category: "Survival", thumb: null, downloadUrl: "#", desc: "Amazon jungle" },
  { id: 186, name: "Stranded Deep", category: "Survival", thumb: null, downloadUrl: "#", desc: "Pacific island" },
  { id: 187, name: "Raft", category: "Survival", thumb: null, downloadUrl: "#", desc: "Ocean rafting" },
  { id: 188, name: "Subnautica", category: "Survival", thumb: null, downloadUrl: "#", desc: "Underwater alien world" },
  { id: 189, name: "Subnautica: Below Zero", category: "Survival", thumb: null, downloadUrl: "#", desc: "Arctic biome" },
  { id: 190, name: "No Man's Sky", category: "Exploration", thumb: null, downloadUrl: "#", desc: "Infinite universe" },
  { id: 191, name: "Starfield", category: "RPG", thumb: null, downloadUrl: "#", desc: "Bethesda space epic" },
  { id: 192, name: "The Outer Worlds", category: "RPG", thumb: null, downloadUrl: "#", desc: "Corporate space" },
  { id: 193, name: "Mass Effect Legendary Edition", category: "RPG", thumb: null, downloadUrl: "#", desc: "Trilogy remaster" },
  { id: 194, name: "Dragon Age: Inquisition", category: "RPG", thumb: null, downloadUrl: "#", desc: "Fantasy epic" },
  { id: 195, name: "Skyrim Special Edition", category: "RPG", thumb: null, downloadUrl: "#", desc: "Open world fantasy" },
  { id: 196, name: "Fallout 4", category: "RPG", thumb: null, downloadUrl: "#", desc: "Post-apocalyptic Boston" },
  { id: 197, name: "Fallout: New Vegas", category: "RPG", thumb: null, downloadUrl: "#", desc: "Mojave wasteland" },
  { id: 198, name: "Kingdom Come: Deliverance", category: "RPG", thumb: null, downloadUrl: "#", desc: "Medieval realism" },
  { id: 199, name: "Outward", category: "RPG", thumb: null, downloadUrl: "#", desc: "Survival RPG" },
  { id: 200, name: "GreedFall", category: "RPG", thumb: null, downloadUrl: "#", desc: "Colonial fantasy" },
  { id: 201, name: "Elex II", category: "RPG", thumb: null, downloadUrl: "#", desc: "Sci-fi fantasy hybrid" },
  { id: 202, name: "Vampyr", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Vampire in London" },
  { id: 203, name: "Code Vein", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Anime souls-like" },
  { id: 204, name: "Remnant: From the Ashes", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Gun souls-like" },
  { id: 205, name: "Remnant II", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Sequel with worlds" },
  { id: 206, name: "Wo Long: Fallen Dynasty", category: "Action", thumb: null, downloadUrl: "#", desc: "Three Kingdoms" },
  { id: 207, name: "Stranger of Paradise: Final Fantasy Origin", category: "Action", thumb: null, downloadUrl: "#", desc: "Chaos-filled" },
  { id: 208, name: "Final Fantasy VII Remake Intergrade", category: "RPG", thumb: null, downloadUrl: "#", desc: "Midgar revisited" },
  { id: 209, name: "Final Fantasy XV", category: "RPG", thumb: null, downloadUrl: "#", desc: "Open world road trip" },
  { id: 210, name: "Persona 5 Royal", category: "RPG", thumb: null, downloadUrl: "#", desc: "Phantom thieves" },
  { id: 211, name: "Persona 4 Golden", category: "RPG", thumb: null, downloadUrl: "#", desc: "Investigation team" },
  { id: 212, name: "Shin Megami Tensei V", category: "RPG", thumb: null, downloadUrl: "#", desc: "Demonic apocalypse" },
  { id: 213, name: "Ni no Kuni II", category: "RPG", thumb: null, downloadUrl: "#", desc: "Studio Ghibli style" },
  { id: 214, name: "Dragon Quest XI S", category: "RPG", thumb: null, downloadUrl: "#", desc: "Classic JRPG" },
  { id: 215, name: "Tales of Arise", category: "RPG", thumb: null, downloadUrl: "#", desc: "Action JRPG" },
  { id: 216, name: "Scarlet Nexus", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Psychic powers" },
  { id: 217, name: "Nier: Automata", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Android rebellion" },
  { id: 218, name: "Nier Replicant", category: "Action RPG", thumb: null, downloadUrl: "#", desc: "Remake of original" },
  { id: 219, name: "Yakuza: Like a Dragon", category: "RPG", thumb: null, downloadUrl: "#", desc: "Turn-based Yakuza" },
  { id: 220, name: "Judgment", category: "Action", thumb: null, downloadUrl: "#", desc: "Detective spin-off" },
  { id: 221, name: "Lost Judgment", category: "Action", thumb: null, downloadUrl: "#", desc: "Sequel" },
  { id: 222, name: "Sleeping Dogs", category: "Action", thumb: null, downloadUrl: "#", desc: "Hong Kong undercover" },
  { id: 223, name: "Watch Dogs 2", category: "Action", thumb: null, downloadUrl: "#", desc: "Hacking sandbox" },
  { id: 224, name: "Watch Dogs Legion", category: "Action", thumb: null, downloadUrl: "#", desc: "Play as anyone" },
  { id: 225, name: "Far Cry 6", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Guerrilla warfare" },
  { id: 226, name: "Far Cry 5", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Montana cult" },
  { id: 227, name: "Far Cry 3", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Classic tropical" },
  { id: 228, name: "Crysis Remastered Trilogy", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Nanotech FPS" },
  { id: 229, name: "Doom Eternal", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Rip and tear" },
  { id: 230, name: "Wolfenstein: The New Order", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Alternate history" },
  { id: 231, name: "Wolfenstein II: The New Colossus", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Nazi fighting" },
  { id: 232, name: "Metro Exodus", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Post-apocalyptic Russia" },
  { id: 233, name: "Metro 2033 Redux", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Underground horror" },
  { id: 234, name: "Metro Last Light Redux", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Sequel" },
  { id: 235, name: "S.T.A.L.K.E.R.: Shadow of Chernobyl", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Zone exploration" },
  { id: 236, name: "S.T.A.L.K.E.R. 2: Heart of Chornobyl", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Upcoming sequel" },
  { id: 237, name: "Borderlands 3", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Looter shooter" },
  { id: 238, name: "Tiny Tina's Wonderlands", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Fantasy spin-off" },
  { id: 239, name: "Destiny 2", category: "Shooter", thumb: null, downloadUrl: "#", desc: "MMO FPS" },
  { id: 240, name: "Warframe", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Space ninjas" },
  { id: 241, name: "The Division 2", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Washington DC" },
  { id: 242, name: "Ghost Recon Breakpoint", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Tactical shooter" },
  { id: 243, name: "Ghost Recon Wildlands", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Bolivia drug cartel" },
  { id: 244, name: "Sniper Elite 5", category: "Shooter", thumb: null, downloadUrl: "#", desc: "X-ray kill cam" },
  { id: 245, name: "Hitman 3", category: "Stealth", thumb: null, downloadUrl: "#", desc: "Assassination sandbox" },
  { id: 246, name: "Hitman World of Assassination", category: "Stealth", thumb: null, downloadUrl: "#", desc: "Trilogy package" },
  { id: 247, name: "Dishonored 2", category: "Stealth", thumb: null, downloadUrl: "#", desc: "Supernatural assassin" },
  { id: 248, name: "Deathloop", category: "Action", thumb: null, downloadUrl: "#", desc: "Time loop shooter" },
  { id: 249, name: "Prey (2017)", category: "Immersive Sim", thumb: null, downloadUrl: "#", desc: "Space station horror" },
  { id: 250, name: "Control", category: "Action", thumb: null, downloadUrl: "#", desc: "Paranormal agency" },
  { id: 251, name: "Alan Wake Remastered", category: "Action Horror", thumb: null, downloadUrl: "#", desc: "Writer's nightmare" },
  { id: 252, name: "Alan Wake 2", category: "Horror", thumb: null, downloadUrl: "#", desc: "Survival horror" },
  { id: 253, name: "Dead Space Remake", category: "Horror", thumb: null, downloadUrl: "#", desc: "Necromorphs in space" },
  { id: 254, name: "Resident Evil 4 Remake", category: "Horror", thumb: null, downloadUrl: "#", desc: "Leon's mission" },
  { id: 255, name: "Resident Evil Village", category: "Horror", thumb: null, downloadUrl: "#", desc: "Vampire lady" },
  { id: 256, name: "Resident Evil 2 Remake", category: "Horror", thumb: null, downloadUrl: "#", desc: "Raccoon City" },
  { id: 257, name: "Resident Evil 3 Remake", category: "Horror", thumb: null, downloadUrl: "#", desc: "Jill Valentine" },
  { id: 258, name: "The Evil Within 2", category: "Horror", thumb: null, downloadUrl: "#", desc: "STEM system" },
  { id: 259, name: "Outlast 2", category: "Horror", thumb: null, downloadUrl: "#", desc: "Religious cult" },
  { id: 260, name: "Amnesia: The Bunker", category: "Horror", thumb: null, downloadUrl: "#", desc: "WWI bunker" },
  { id: 261, name: "SOMA", category: "Horror", thumb: null, downloadUrl: "#", desc: "Underwater existential" },
  { id: 262, name: "Alien: Isolation", category: "Horror", thumb: null, downloadUrl: "#", desc: "Stealth vs Xenomorph" },
  { id: 263, name: "Phasmophobia", category: "Horror", thumb: null, downloadUrl: "#", desc: "Ghost hunting co-op" },
  { id: 264, name: "Dead by Daylight", category: "Horror", thumb: null, downloadUrl: "#", desc: "Asymmetrical multiplayer" },
  { id: 265, name: "Friday the 13th: The Game", category: "Horror", thumb: null, downloadUrl: "#", desc: "Jason vs campers" },
  { id: 266, name: "Evil Dead: The Game", category: "Horror", thumb: null, downloadUrl: "#", desc: "Ash vs demons" },
  { id: 267, name: "The Quarry", category: "Horror", thumb: null, downloadUrl: "#", desc: "Teen camp horror" },
  { id: 268, name: "Until Dawn", category: "Horror", thumb: null, downloadUrl: "#", desc: "Butterfly effect" },
  { id: 269, name: "The Dark Pictures Anthology: House of Ashes", category: "Horror", thumb: null, downloadUrl: "#", desc: "Iraqi war horror" },
  { id: 270, name: "Little Nightmares II", category: "Puzzle Horror", thumb: null, downloadUrl: "#", desc: "Creepy world" },
  { id: 271, name: "Inside", category: "Puzzle Platformer", thumb: null, downloadUrl: "#", desc: "Dark side-scroller" },
  { id: 272, name: "Limbo", category: "Puzzle Platformer", thumb: null, downloadUrl: "#", desc: "Monochrome boy" },
  { id: 273, name: "Ori and the Will of the Wisps", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Beautiful metroidvania" },
  { id: 274, name: "Ori and the Blind Forest", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Forest spirit" },
  { id: 275, name: "Celeste", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Mountain climbing" },
  { id: 276, name: "Hollow Knight", category: "Metroidvania", thumb: null, downloadUrl: "#", desc: "Bug kingdom" },
  { id: 277, name: "Blasphemous", category: "Metroidvania", thumb: null, downloadUrl: "#", desc: "Religious horror" },
  { id: 278, name: "Bloodstained: Ritual of the Night", category: "Metroidvania", thumb: null, downloadUrl: "#", desc: "Castlevania-like" },
  { id: 279, name: "Ender Lilies", category: "Metroidvania", thumb: null, downloadUrl: "#", desc: "Cursed girl" },
  { id: 280, name: "Salt and Sanctuary", category: "Metroidvania", thumb: null, downloadUrl: "#", desc: "2D souls-like" },
  { id: 281, name: "Tunic", category: "Action Adventure", thumb: null, downloadUrl: "#", desc: "Isometric fox" },
  { id: 282, name: "Death's Door", category: "Action", thumb: null, downloadUrl: "#", desc: "Crow reaper" },
  { id: 283, name: "Kena: Bridge of Spirits", category: "Action", thumb: null, downloadUrl: "#", desc: "Spirit guide" },
  { id: 284, name: "Stray", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Cyberpunk cat" },
  { id: 285, name: "A Short Hike", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Relaxing hike" },
  { id: 286, name: "Firewatch", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Mystery in woods" },
  { id: 287, name: "What Remains of Edith Finch", category: "Walking Sim", thumb: null, downloadUrl: "#", desc: "Family curse" },
  { id: 288, name: "The Vanishing of Ethan Carter", category: "Walking Sim", thumb: null, downloadUrl: "#", desc: "Detective mystery" },
  { id: 289, name: "Life is Strange: True Colors", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Empathy powers" },
  { id: 290, name: "Life is Strange 2", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Brotherly journey" },
  { id: 291, name: "Tell Me Why", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Twin bond" },
  { id: 292, name: "The Walking Dead: The Final Season", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Clementine's end" },
  { id: 293, name: "The Wolf Among Us", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Fairy tale noir" },
  { id: 294, name: "Batman: The Telltale Series", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Bruce Wayne" },
  { id: 295, name: "Disco Elysium - The Final Cut", category: "RPG", thumb: null, downloadUrl: "#", desc: "Detective RPG" },
  { id: 296, name: "Planescape: Torment: Enhanced Edition", category: "RPG", thumb: null, downloadUrl: "#", desc: "Classic CRPG" },
  { id: 297, name: "Pillars of Eternity II: Deadfire", category: "RPG", thumb: null, downloadUrl: "#", desc: "Island exploration" },
  { id: 298, name: "Divinity: Original Sin 2", category: "RPG", thumb: null, downloadUrl: "#", desc: "Turn-based fantasy" },
  { id: 299, name: "Pathfinder: Wrath of the Righteous", category: "RPG", thumb: null, downloadUrl: "#", desc: "Epic CRPG" },
  { id: 300, name: "Tyranny", category: "RPG", thumb: null, downloadUrl: "#", desc: "Evil overlord" },
  { id: 301, name: "Shadowrun Returns", category: "RPG", thumb: null, downloadUrl: "#", desc: "Cyberpunk fantasy" },
  { id: 302, name: "Wasteland 3", category: "RPG", thumb: null, downloadUrl: "#", desc: "Post-apocalyptic tactical" },
  { id: 303, name: "Underrail", category: "RPG", thumb: null, downloadUrl: "#", desc: "Hardcore CRPG" },
  { id: 304, name: "Age of Decadence", category: "RPG", thumb: null, downloadUrl: "#", desc: "Roman post-apoc" },
  { id: 305, name: "Colony Ship: A Post-Earth RPG", category: "RPG", thumb: null, downloadUrl: "#", desc: "Spaceship society" },
  { id: 306, name: "Encased", category: "RPG", thumb: null, downloadUrl: "#", desc: "Sci-fi dome" },
  { id: 307, name: "Atom RPG", category: "RPG", thumb: null, downloadUrl: "#", desc: "Russian Fallout-like" },
  { id: 308, name: "Kingdom Two Crowns", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Side-scrolling kingdom" },
  { id: 309, name: "Frostpunk", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Survival city builder" },
  { id: 310, name: "They Are Billions", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Zombie survival RTS" },
  { id: 311, name: "Hollow Knight: Silksong", category: "Action", thumb: null, downloadUrl: "#", desc: "Hornet adventure" },
  { id: 312, name: "Age of Empires IV", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Historical RTS" },
  { id: 313, name: "Age of Empires II: Definitive Edition", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Classic remaster" },
  { id: 314, name: "StarCraft II", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Sci-fi RTS" },
  { id: 315, name: "Warcraft III: Reforged", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Orcs vs Humans" },
  { id: 316, name: "Total War: Warhammer III", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Grand strategy" },
  { id: 317, name: "Total War: Three Kingdoms", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Chinese epic" },
  { id: 318, name: "Civilization VI", category: "Strategy", thumb: null, downloadUrl: "#", desc: "4X empire building" },
  { id: 319, name: "Civilization V", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Legendary 4X" },
  { id: 320, name: "Endless Legend", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Fantasy 4X" },
  { id: 321, name: "Endless Space 2", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Space 4X" },
  { id: 322, name: "Stellaris", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Space grand strategy" },
  { id: 323, name: "Crusader Kings III", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Dynasty simulator" },
  { id: 324, name: "Europa Universalis IV", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Historical grand strat" },
  { id: 325, name: "Hearts of Iron IV", category: "Strategy", thumb: null, downloadUrl: "#", desc: "WWII grand strat" },
  { id: 326, name: "Victoria 3", category: "Strategy", thumb: null, downloadUrl: "#", desc: "19th century" },
  { id: 327, name: "Anno 1800", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Industrial revolution" },
  { id: 328, name: "Surviving Mars", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Mars colonization" },
  { id: 329, name: "Planet Zoo", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Zoo management" },
  { id: 330, name: "Jurassic World Evolution 2", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Dinosaur park" },
  { id: 331, name: "Park Beyond", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Impossible theme park" },
  { id: 332, name: "Two Point Hospital", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Medical management" },
  { id: 333, name: "Project Hospital", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Realistic hospital" },
  { id: 334, name: "Airport CEO", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Airport management" },
  { id: 335, name: "SimAirport", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Build and manage" },
  { id: 336, name: "Prison Architect", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Prison management" },
  { id: 337, name: "RimWorld", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Colony sim" },
  { id: 338, name: "Dwarf Fortress", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Classic fortress mode" },
  { id: 339, name: "Oxygen Not Included", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Space colony" },
  { id: 340, name: "Graveyard Keeper", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Medieval graveyard" },
  { id: 341, name: "Stardew Valley", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Farming RPG" },
  { id: 342, name: "My Time at Portia", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Workshop builder" },
  { id: 343, name: "My Time at Sandrock", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Desert sequel" },
  { id: 344, name: "Coral Island", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Tropical farming" },
  { id: 345, name: "Sun Haven", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Fantasy farming" },
  { id: 346, name: "Traveler's Rest", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Innkeeping" },
  { id: 347, name: "Potion Craft", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Alchemist sim" },
  { id: 348, name: "Potions: A Curious Tale", category: "RPG", thumb: null, downloadUrl: "#", desc: "Witch brewing" },
  { id: 349, name: "Wytchwood", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Gothic fairy tale" },
  { id: 350, name: "The Last Campfire", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Ember's journey" },
  { id: 351, name: "Omno", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Zen exploration" },
  { id: 352, name: "The Pathless", category: "Action", thumb: null, downloadUrl: "#", desc: "Archery adventure" },
  { id: 353, name: "Solar Ash", category: "Action", thumb: null, downloadUrl: "#", desc: "Surreal skating" },
  { id: 354, name: "Sable", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Coming-of-age" },
  { id: 355, name: "Outer Wilds", category: "Exploration", thumb: null, downloadUrl: "#", desc: "Time loop mystery" },
  { id: 356, name: "The Forgotten City", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Roman time loop" },
  { id: 357, name: "Return of the Obra Dinn", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Detective mystery" },
  { id: 358, name: "The Case of the Golden Idol", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Investigation" },
  { id: 359, name: "Her Story", category: "FMV", thumb: null, downloadUrl: "#", desc: "Police database" },
  { id: 360, name: "Immortality", category: "FMV", thumb: null, downloadUrl: "#", desc: "Lost film actress" },
  { id: 361, name: "Pentiment", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Medieval murder" },
  { id: 362, name: "Citizen Sleeper", category: "RPG", thumb: null, downloadUrl: "#", desc: "Space station sim" },
  { id: 363, name: "Norco", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Southern gothic" },
  { id: 364, name: "Kentucky Route Zero", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Magical realism" },
  { id: 365, name: "Night in the Woods", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Small town mystery" },
  { id: 366, name: "Oxenfree", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Supernatural radio" },
  { id: 367, name: "Oxenfree II: Lost Signals", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Sequel" },
  { id: 368, name: "Afterparty", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Hell drinking game" },
  { id: 369, name: "Psychonauts 2", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Mind powers" },
  { id: 370, name: "Psychonauts", category: "Platformer", thumb: null, downloadUrl: "#", desc: "Classic cult" },
  { id: 371, name: "Brutal Legend", category: "Action", thumb: null, downloadUrl: "#", desc: "Heavy metal" },
  { id: 372, name: "Costume Quest", category: "RPG", thumb: null, downloadUrl: "#", desc: "Halloween adventure" },
  { id: 373, name: "Stacking", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Russian doll world" },
  { id: 374, name: "Iron Brigade", category: "Tower Defense", thumb: null, downloadUrl: "#", desc: "Mech TD" },
  { id: 375, name: "Grim Fandango Remastered", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Calaca travel" },
  { id: 376, name: "Full Throttle Remastered", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Biker gang" },
  { id: 377, name: "Day of the Tentacle Remastered", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Time travel" },
  { id: 378, name: "Thimbleweed Park", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Maniac Mansion style" },
  { id: 379, name: "The Bookwalker", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Writer thief" },
  { id: 380, name: "Return to Monkey Island", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Guybrush returns" },
  { id: 381, name: "Sam & Max Save the World", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Freelance police" },
  { id: 382, name: "The Darkside Detective", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Pixel mystery" },
  { id: 383, name: "Unpacking", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Zen unpacking" },
  { id: 384, name: "A Little to the Left", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Organizing" },
  { id: 385, name: "Lake", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Mail delivery" },
  { id: 386, name: "Beacon Pines", category: "Adventure", thumb: null, downloadUrl: "#", desc: "Cute spooky" },
  { id: 387, name: "I Was a Teenage Exocolonist", category: "RPG", thumb: null, downloadUrl: "#", desc: "Space colony life" },
  { id: 388, name: "Wylde Flowers", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Witch farming" },
  { id: 389, name: "Cozy Grove", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Spirit bears" },
  { id: 390, name: "Spiritfarer", category: "Management", thumb: null, downloadUrl: "#", desc: "Ferry souls" },
  { id: 391, name: "Bear and Breakfast", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Bear runs B&B" },
  { id: 392, name: "Lemon Cake", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Bakery game" },
  { id: 393, name: "Chef Life: A Restaurant Simulator", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Cooking" },
  { id: 394, name: "PlateUp!", category: "Simulation", thumb: null, downloadUrl: "#", desc: "Restaurant roguelite" },
  { id: 395, name: "Overcooked! 2", category: "Party", thumb: null, downloadUrl: "#", desc: "Chaotic cooking" },
  { id: 396, name: "Moving Out", category: "Party", thumb: null, downloadUrl: "#", desc: "Furniture moving" },
  { id: 397, name: "Tools Up!", category: "Party", thumb: null, downloadUrl: "#", desc: "Renovation chaos" },
  { id: 398, name: "Human: Fall Flat", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Wobbly physics" },
  { id: 399, name: "Gang Beasts", category: "Party", thumb: null, downloadUrl: "#", desc: "Gelatin brawler" },
  { id: 400, name: "Party Animals", category: "Party", thumb: null, downloadUrl: "#", desc: "Cute fighting" },
  { id: 401, name: "Rubber Bandits", category: "Party", thumb: null, downloadUrl: "#", desc: "Heist brawler" },
  { id: 402, name: "Boomerang Fu", category: "Party", thumb: null, downloadUrl: "#", desc: "Boomerang combat" },
  { id: 403, name: "Duck Game", category: "Party", thumb: null, downloadUrl: "#", desc: "2D duck shooting" },
  { id: 404, name: "Stick Fight: The Game", category: "Party", thumb: null, downloadUrl: "#", desc: "Stick figure brawl" },
  { id: 405, name: "Ultimate Chicken Horse", category: "Party", thumb: null, downloadUrl: "#", desc: "Build platformer" },
  { id: 406, name: "Pummel Party", category: "Party", thumb: null, downloadUrl: "#", desc: "Mario Party-like" },
  { id: 407, name: "Mario Party Superstars", category: "Party", thumb: null, downloadUrl: "#", desc: "Nintendo classic" },
  { id: 408, name: "Jackbox Party Pack 9", category: "Party", thumb: null, downloadUrl: "#", desc: "Trivia and fun" },
  { id: 409, name: "The Jackbox Party Pack 3", category: "Party", thumb: null, downloadUrl: "#", desc: "Quiplash, Tee KO" },
  { id: 410, name: "Drawful 2", category: "Party", thumb: null, downloadUrl: "#", desc: "Drawing game" },
  { id: 411, name: "Gartic Phone", category: "Party", thumb: null, downloadUrl: "#", desc: "Drawing telephone" },
  { id: 412, name: "Skribbl.io", category: "Party", thumb: null, downloadUrl: "#", desc: "Online drawing" },
  { id: 413, name: "Krunker.io", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Browser FPS" },
  { id: 414, name: "Shell Shockers", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Egg shooter" },
  { id: 415, name: "Surviv.io", category: "Battle Royale", thumb: null, downloadUrl: "#", desc: "2D BR" },
  { id: 416, name: "Zombs Royale", category: "Battle Royale", thumb: null, downloadUrl: "#", desc: "Zombie BR" },
  { id: 417, name: "Vampire Survivors", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Reverse bullet hell" },
  { id: 418, name: "Brotato", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Potato survival" },
  { id: 419, name: "20 Minutes Till Dawn", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Survivor-like" },
  { id: 420, name: "Soulstone Survivors", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "ARPG survivors" },
  { id: 421, name: "Boneraiser Minions", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Skeleton army" },
  { id: 422, name: "Rogue Legacy 2", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Family lineage" },
  { id: 423, name: "The Binding of Isaac: Repentance", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Zelda-like dungeon" },
  { id: 424, name: "Enter the Gungeon", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Gungeon crawler" },
  { id: 425, name: "Streets of Rogue", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Immersive sim lite" },
  { id: 426, name: "Risk of Rain 2", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "3D action" },
  { id: 427, name: "Gunfire Reborn", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "FPS roguelite" },
  { id: 428, name: "Roboquest", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "FPS robot" },
  { id: 429, name: "Neon Abyss", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Horizontal shooter" },
  { id: 430, name: "Skul: The Hero Slayer", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Skeleton hero" },
  { id: 431, name: "Curse of the Dead Gods", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Aztec temple" },
  { id: 432, name: "Wizard of Legend", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Spell slinger" },
  { id: 433, name: "Children of Morta", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Family dungeon" },
  { id: 434, name: "Moonlighter", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Shopkeeper by day" },
  { id: 435, name: "Undermine", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Mining combat" },
  { id: 436, name: "Atomicrops", category: "Roguelite", thumb: null, downloadUrl: "#", desc: "Farming shooter" },
  { id: 437, name: "Cult of the Lamb", category: "Action", thumb: null, downloadUrl: "#", desc: "Cult management" },
  { id: 438, name: "Dome Keeper", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Mining defense" },
  { id: 439, name: "Wall World", category: "Strategy", thumb: null, downloadUrl: "#", desc: "Wall climbing mining" },
  { id: 440, name: "Terraria", category: "Sandbox", thumb: null, downloadUrl: "#", desc: "2D crafting adventure" },
  { id: 441, name: "Starbound", category: "Sandbox", thumb: null, downloadUrl: "#", desc: "Space terraria" },
  { id: 442, name: "Core Keeper", category: "Sandbox", thumb: null, downloadUrl: "#", desc: "Underground survival" },
  { id: 443, name: "Necesse", category: "Sandbox", thumb: null, downloadUrl: "#", desc: "Settlement survival" },
  { id: 444, name: "Keplerth", category: "Sandbox", thumb: null, downloadUrl: "#", desc: "Alien world" },
  { id: 445, name: "Project Zomboid", category: "Survival", thumb: null, downloadUrl: "#", desc: "Hardcore zombie" },
  { id: 446, name: "7 Days to Die", category: "Survival", thumb: null, downloadUrl: "#", desc: "Zombie horde" },
  { id: 447, name: "State of Decay 2", category: "Survival", thumb: null, downloadUrl: "#", desc: "Community zombie" },
  { id: 448, name: "Dying Light 2", category: "Action Horror", thumb: null, downloadUrl: "#", desc: "Parkour zombie" },
  { id: 449, name: "Dead Island 2", category: "Action", thumb: null, downloadUrl: "#", desc: "California zombie" },
  { id: 450, name: "Back 4 Blood", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Left 4 Dead spiritual" },
  { id: 451, name: "World War Z", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Swarm shooter" },
  { id: 452, name: "Killing Floor 2", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Co-op zombie FPS" },
  { id: 453, name: "Deep Rock Galactic", category: "Co-op", thumb: null, downloadUrl: "#", desc: "Dwarven miners" },
  { id: 454, name: "Vermintide 2", category: "Action", thumb: null, downloadUrl: "#", desc: "Warhammer rats" },
  { id: 455, name: "Darktide", category: "Action", thumb: null, downloadUrl: "#", desc: "40K horde shooter" },
  { id: 456, name: "Payday 2", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Heist co-op" },
  { id: 457, name: "Ready or Not", category: "Tactical", thumb: null, downloadUrl: "#", desc: "SWAT sim" },
  { id: 458, name: "Insurgency: Sandstorm", category: "Tactical", thumb: null, downloadUrl: "#", desc: "Hardcore FPS" },
  { id: 459, name: "Hell Let Loose", category: "Tactical", thumb: null, downloadUrl: "#", desc: "WWII large scale" },
  { id: 460, name: "Squad", category: "Tactical", thumb: null, downloadUrl: "#", desc: "Modern warfare" },
  { id: 461, name: "Arma 3", category: "Military", thumb: null, downloadUrl: "#", desc: "Sandbox sim" },
  { id: 462, name: "Escape from Tarkov", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Hardcore extraction" },
  { id: 463, name: "Marauders", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Dieselpunk extraction" },
  { id: 464, name: "The Cycle: Frontier", category: "Shooter", thumb: null, downloadUrl: "#", desc: "PVPVE extraction" },
  { id: 465, name: "Hunt: Showdown", category: "Horror Shooter", thumb: null, downloadUrl: "#", desc: "Monster hunting" },
  { id: 466, name: "GTFO", category: "Horror Co-op", thumb: null, downloadUrl: "#", desc: "Difficult stealth" },
  { id: 467, name: "Phasmophobia", category: "Horror", thumb: null, downloadUrl: "#", desc: "Ghost hunting" },
  { id: 468, name: "Demonologist", category: "Horror", thumb: null, downloadUrl: "#", desc: "K-pop ghost" },
  { id: 469, name: "Forewarned", category: "Horror", thumb: null, downloadUrl: "#", desc: "Egyptian ghosts" },
  { id: 470, name: "Labyrinthine", category: "Horror", thumb: null, downloadUrl: "#", desc: "Procedural maze" },
  { id: 471, name: "Inside the Backrooms", category: "Horror", thumb: null, downloadUrl: "#", desc: "Backrooms survival" },
  { id: 472, name: "Escape the Backrooms", category: "Horror", thumb: null, downloadUrl: "#", desc: "Co-op backrooms" },
  { id: 473, name: "Poppy Playtime", category: "Horror", thumb: null, downloadUrl: "#", desc: "Toy factory" },
  { id: 474, name: "Bendy and the Dark Revival", category: "Horror", thumb: null, downloadUrl: "#", desc: "Ink demon" },
  { id: 475, name: "Hello Neighbor 2", category: "Stealth", thumb: null, downloadUrl: "#", desc: "Neighbor AI" },
  { id: 476, name: "FNAF: Security Breach", category: "Horror", thumb: null, downloadUrl: "#", desc: "Animatronics" },
  { id: 477, name: "The Mortuary Assistant", category: "Horror", thumb: null, downloadUrl: "#", desc: "Mortuary sim" },
  { id: 478, name: "Choo-Choo Charles", category: "Horror", thumb: null, downloadUrl: "#", desc: "Spider train" },
  { id: 479, name: "Carrion", category: "Reverse Horror", thumb: null, downloadUrl: "#", desc: "Monster rampage" },
  { id: 480, name: "Maneater", category: "Action", thumb: null, downloadUrl: "#", desc: "Shark RPG" },
  { id: 481, name: "Goat Simulator 3", category: "Comedy", thumb: null, downloadUrl: "#", desc: "Goat chaos" },
  { id: 482, name: "Just Cause 4", category: "Action", thumb: null, downloadUrl: "#", desc: "Grappling hook" },
  { id: 483, name: "Saints Row (2022)", category: "Action", thumb: null, downloadUrl: "#", desc: "Reboot" },
  { id: 484, name: "Saints Row: The Third Remastered", category: "Action", thumb: null, downloadUrl: "#", desc: "Classic" },
  { id: 485, name: "Sunset Overdrive", category: "Action", thumb: null, downloadUrl: "#", desc: "Colorful parkour" },
  { id: 486, name: "Prototype 2", category: "Action", thumb: null, downloadUrl: "#", desc: "Shapeshifting" },
  { id: 487, name: "Infamous Second Son", category: "Action", thumb: null, downloadUrl: "#", desc: "Conduit powers" },
  { id: 488, name: "Darksiders III", category: "Action", thumb: null, downloadUrl: "#", desc: "Fury's quest" },
  { id: 489, name: "Darksiders Genesis", category: "Action", thumb: null, downloadUrl: "#", desc: "Isometric spin-off" },
  { id: 490, name: "Castlevania: Lords of Shadow 2", category: "Action", thumb: null, downloadUrl: "#", desc: "Dracula returns" },
  { id: 491, name: "Devil May Cry 5", category: "Action", thumb: null, downloadUrl: "#", desc: "Stylish combat" },
  { id: 492, name: "Bayonetta", category: "Action", thumb: null, downloadUrl: "#", desc: "Witch time" },
  { id: 493, name: "Metal Gear Rising: Revengeance", category: "Action", thumb: null, downloadUrl: "#", desc: "Cyborg ninja" },
  { id: 494, name: "Vanquish", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Slide mechanics" },
  { id: 495, name: "Transformers: War for Cybertron", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Robot war" },
  { id: 496, name: "High On Life", category: "Shooter", thumb: null, downloadUrl: "#", desc: "Talking guns" },
  { id: 497, name: "Trover Saves the Universe", category: "Comedy", thumb: null, downloadUrl: "#", desc: "VR-less platformer" },
  { id: 498, name: "Accounting+", category: "Comedy", thumb: null, downloadUrl: "#", desc: "VR weirdness" },
  { id: 499, name: "The Stanley Parable: Ultra Deluxe", category: "Walking Sim", thumb: null, downloadUrl: "#", desc: "Narrative choice" },
  { id: 500, name: "Superliminal", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Perspective puzzle" },
  { id: 501, name: "Manifold Garden", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Impossible geometry" },
  { id: 502, name: "Antichamber", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Non-Euclidean" },
  { id: 503, name: "The Witness", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Line puzzles" },
  { id: 504, name: "Baba Is You", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Word-based logic" },
  { id: 505, name: "Opus Magnum", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Alchemy machine" },
  { id: 506, name: "Shenzhen I/O", category: "Puzzle", thumb: null, downloadUrl: "#", desc: "Circuit design" },
  { id: 507, name: "Zachtronics Solitaire Collection", category: "Card", thumb: null, downloadUrl: "#", desc: "Solitaire variants" },
  { id: 508, name: "Inscryption", category: "Card Game", thumb: null, downloadUrl: "#", desc: "Horror deckbuilder" },
  { id: 509, name: "Monster Train", category: "Card Game", thumb: null, downloadUrl: "#", desc: "Train defense" },
  { id: 510, name: "Across the Obelisk", category: "Card Game", thumb: null, downloadUrl: "#", desc: "Co-op roguelike" },
  { id: 511, name: "Griftlands", category: "Card Game", thumb: null, downloadUrl: "#", desc: "Negotiation combat" },
      
    ];

   let ALL_GAMES = [...RAW_CATALOG];

// Make available to updates.html
window.GAMES_CATALOG = ALL_GAMES;



const grid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("search");

let activeCategory = "";

function showToast(msg, duration = 1800) {
  let existing = document.querySelector(".toast-msg");
  if (existing) existing.remove();

  let toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerText = msg;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, duration);
}

function renderGames() {
  if (!grid) {
    console.error("gamesGrid element not found!");
    return;
  }

  const filterText = searchInput
    ? searchInput.value.toLowerCase()
    : "";

  const filtered = ALL_GAMES.filter(game => {
    const matchName = (game.name || "")
      .toLowerCase()
      .includes(filterText);

    const matchCat =
      activeCategory === "" ||
      (game.category || "")
        .toLowerCase() === activeCategory.toLowerCase();

    return matchName && matchCat;
  });



  if (!filtered.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:40px;">
        No games found.<br>
        Try a different search or category.
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(game => `
    <div class="game-card"
         data-game-id="${game.id}"
         data-category="${game.category || ''}">

      <div class="thumbnail">
        <img
          src="${game.thumb || 'https://placehold.co/300x450?text=Game+Vault'}"
          alt="${game.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/300x450?text=Game+Vault'">

        <a href="${game.downloadUrl || '#'}"
           target="_blank"
           class="quick-download">
          DOWNLOAD NOW
        </a>
      </div>

      <div class="game-info">
        <span class="tag">${game.category || 'Other'}</span>
        <h3>${game.name}</h3>
        <p>${game.desc || ''}</p>
      </div>

    </div>
  `).join("");

  document.querySelectorAll(".quick-download").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      showToast("Download Started");
    });
  });
}

function updateFilters() {
  renderGames();
}

if (searchInput) {
  searchInput.addEventListener("input", updateFilters);
}

document
  .querySelectorAll(".nav-dropdown-content .nav-link")
  .forEach(catLink => {
    catLink.addEventListener("click", (e) => {
      e.preventDefault();

      activeCategory =
        catLink.getAttribute("data-category") || "";

      renderGames();
    });
  });



// Only auto-render if gamesGrid exists AND is visible (not inside hidden #protected-content)
if (document.getElementById('gamesGrid') && !document.getElementById('protected-content')) {
  renderGames();
}

// Export getGameDownloadLink for use by index.html module script
window._getGameDownloadLink = null; // set by firestore-service after it loads

})();