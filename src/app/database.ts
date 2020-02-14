export const hulls = [
  {
    name: 'Early Destroyer Hull',
    slots: ['low1_DD','low2','low3','low4','low5_DD','low6_DD','mid_DD22','rear_DD22'],
    description: 'This hull will fit old obsolete WWI era vessels, smol and weak escortish DDs, failed designs, or anything remotely Italian'
  },
  {
    name: '1936 Destroyer Hull',
    slots: ['low1_DD','low2','low3','low4','low5_DD','low6_DD','mid_DD36a','rear_DD36a'],
    description: 'Basically, Fubuki. Except IG Fubuki is an Early Hull for paradox reasons.'
  },
  {
    name: '1940 Destroyer Hull',
    slots: ['low1_DD','low2','low3','low4','low5_DD','low6_DD','front_DD40a','mid_DD36a','rear_DD36a'],
    description: 'You get a Fletcher ! And you get a Fletcher ! Everybody gets a Fletcher !'
  },
  {
    name: '1944 Destroyer Hull',
    slots: ['low1_DD','low2','low3','low4','low5_DD','low6_DD','front_DD40a','mid_DD36a','mid_DD36a','rear_DD36a'],
    description: 'If for some reasons you are playing Spain and are specifically trying to recreate its abandonned Project 148A... congratulations, you are at the right hull. Also your goals are weird.'
  }
];

export const slots = [
  {
    name: 'Destroyer Battery',
    id: 'low1_DD',
    categories: ['gun_DD'],
    description: 'The Naval Treaties stipulates that every warship must have a firearm on board, otherwise it is illegal. Do not question the logic of the treaties and pick a gun, even if it is the worst gun in existence.'
  },

  {
    name: 'Anti-Air',
    id: 'low2',
    categories: ['all','anti_air'],
    description: 'This place is specifically reserved for very smol guns. Even if you put one, you will still need a bigger gun, because smol guns are too cute to count towards the treaties'
  },

  {
    name: 'Fire Control System',
    id: 'low3',
    categories: ['all','fire_control','sonar'],
    description: 'Here, you can put a tool that will help your sailors aim better than in the enemys general direction. Or you can put a sonar, for some reasons.'
  },

  {
    name: 'Radar/Sonar',
    id: 'low4',
    categories: ['all','radar','sonar'],
    description: 'This is where cutting-edge detection tools go - so, as high as possible. You can also put a sonar there. Maybe so that it can emit soundwaves to repel the seagulls, I dunno.'
  },

  {
    name: 'Torpedo Launchers',
    id: 'low5_DD',
    categories: ['all','torpedo'],
    description: 'Metal Fish Tank goes here. If you are playing Japan, it is mandatory. Nah, just kiddin. But it should be.'
  },

  {
    name: 'Destroyer Engine',
    id: 'low6_DD',
    categories: ['engine_DD'],
    description: 'You need stuff that heats water to an absurd degree, so as to make your ship go forward : this is where it goes. You cannot build a ship without one of these, because otherwise it is called a coastal battery.'
  },

  {
    name: 'Front 1 Custom',
    id: 'front_DD40a',
    categories: ['all','anti_air','gun_DD','asw'],
    description: 'This is the very nose of your ship. For some reasons, you can put Depth Charges there. Also, since we are not in an inaccurate hollywood blockbuster, you cannot put torpedoes there'
  },

  {
    name: 'Mid 1 Custom - V1',
    id: 'mid_DD22',
    categories: ['all','anti_air','asw','mine','torpedo'],
    description: 'No, you cant put a gun there. Dont ask me. I have no idea either.'
  },

  {
    name: 'Mid 1 Custom - V2',
    id: 'mid_DD36a',
    categories: ['all','anti_air','gun_DD','asw','mine','torpedo'],
    description: 'This is basically anywhere in the middle of your boat. You can put plenty of stuff there, but no electronic, because that would be unfair I guess.'
  },

  {
    name: 'Rear 1 Custom - V1',
    id: 'rear_DD22',
    categories: ['all','anti_air','asw','mine','torpedo'],
    description: 'I dunno man. Honestly, maybe they thought old DDs had to be so weak that they could only mount a single main gun ? Who will ever know....'
  },

  {
    name: 'Rear 1 Custom - V2',
    id: 'rear_DD36a',
    categories: ['all','anti_air','gun_DD','asw','mine','torpedo'],
    description: 'This is the back of your ship. You can put just as many things as you can in the middle. Still no electronics. Although to be fair I myself would not put hydrophones just besides the propellers.'
  }

];

export const equipments = [
  {
    name: 'Nothing',
    category: 'all',
    description: 'Most reliable piece of equipment in existence. Quite litteraly never breaks down.'
  },
//DD main battery
  {
    name: 'Light Battery I',
    category: 'gun_DD',
    description: 'Next to this thing, the Japanese 127mm Type 89 is a monster.'
  },
  {
    name: 'Light Battery II',
    category: 'gun_DD',
    description: '120mm and 127mm hu ? How original. Definitly novel, never-seen before calibers'
  },
  {
    name: 'Light Battery III',
    category: 'gun_DD',
    description: 'Friendly reminder that the US 5/38 Mark 13 was used on EVERY US DD from Farragut to Gearing. So technically the US should only have access to one DD gun technology...'
  },
  {
    name: 'Light Battery IV',
    category: 'gun_DD',
    description: 'Just pick the dual-purpose one. Seriously, can you even quote a late-war single-purpose DD main gun ? Like, did that even exist ?'
  },
  {
    name: 'Light Battery DP',
    category: 'gun_DD',
    description: 'The only main gun DP. Because clearly every Dual-Purpose gun had the same performance, from the late 20s japanese 127mm design to the post-war Bofors M50...'
  },
//AA Guns
  {
    name: 'Anti-Air I',
    category: 'anti_air',
    description: 'No, no, I never said this gun can shot planes. I said it can shot AT planes. That is different.'
  },
  {
    name: 'Anti-Air II',
    category: 'anti_air',
    description: 'What ? Are you excepting a witty comment for every piece of equipment ? Sorry, but despite trying to shoot them, AAII is just too... plain for me to have something to say about it.'
  },
  {
    name: 'Anti-Air III',
    category: 'anti_air',
    description: 'Ah, yes, Anti-Air III. For most nations, this would actually translate to : if we squeeze the AAII guns, we can fit some more inbetween. Anti-Air Warfare in all its subtility...'
  },
  {
    name: 'Anti-Air IV',
    category: 'anti_air',
    description: 'Just sayin, but having a balanced AA suite is more important than having the biggest AA guns possible. Otherwise Yamato would be the best AA ship in existance...'
  },
//Fire Control System
  {
    name: 'Fire Control 0',
    category: 'fire_control',
    description: 'Fire Control 0 is basically a guy standing on deck giving commands like : shoot a little bit more to the left...'
  },
  {
    name: 'Fire Control I',
    category: 'fire_control',
    description: 'Yay, optics. They are often mocked but remember that radars did not become truly efficient in fire control until at least 1943.'
  },
  {
    name: 'Fire Control II',
    category: 'fire_control',
    description: 'The admiralty tables are here to do all the calculations for you so your shot is well aimed ! Of course, it does not counter dispertion, so if your guns are crappy, well, too bad for you !'
  },
  {
    name: 'Fire Control III',
    category: 'fire_control',
    description: 'Be thankful. The combined effort of British and American scientists is what gave birth to these weird tennis mini-games on radar equipment, which would eventually evolve into computers and video games.'
  },
//Sonar
  {
    name: 'Hydrophones',
    category: 'sonar',
    description: 'Well, technically it is NOT a sonar, but I guess it is meant to detect stuff underwater so close enough.'
  },
  {
    name: 'Sonar',
    category: 'sonar',
    description: 'Insert joke about this being the only redeeming quality of British escort vessels'
  },
//Radar
  {
    name: 'Radar I',
    category: 'radar',
    description: 'With this radar, you will be able to know that something is nearby ! Not what or where it is, tho. Might be an enemy ship. Might be an island. Might be nothing. It is a surprise !'
  },
  {
    name: 'Radar II',
    category: 'radar',
    description: 'This one is better : you can get a general direction. What it detects may still be nothing tho. I mean, what did you expect, the technology is young, it is still buggy'
  },
  {
    name: 'Radar III',
    category: 'radar',
    description: 'Yes okay this one is more accurate. But you still do not have an IFF so do not go accidentally blind-shooting your allies. Not that this would ever happen... right ?'
  },
  {
    name: 'Radar IV',
    category: 'radar',
    description: 'Okay cool. Now you have a usable radar ! Just one thing to do now : teach you crew how to use it, because trust me, they have NO IDEA what this flashing screen is'
  },
//Torpedo tubes
  {
    name: 'Torpedo Launcher I',
    category: 'torpedo',
    description: 'The great gamechanger of naval warfare ! Except that by now it has lost its title to aviation. Oh well.'
  },
  {
    name: 'Torpedo Launcher II',
    category: 'torpedo',
    description: 'What ? That is literally just the same thing but with more tubes. I should have copy-pasted the description of model I'
  },
  {
    name: 'Torpedo Launcher III',
    category: 'torpedo',
    description: 'If I had to choose, I would give a special turreted launcher tech to the Japanese. No, not because they need it. Just out of pure national bias.'
  },
  {
    name: 'Torpedo Launcher IV',
    category: 'torpedo',
    description: 'Honestly, the torpedo technology is far more important than the launcher one... Having more tubes means you can make more attacks, that is all. You are not supposed to need 10 torp hits to sink a ship... Unless you are Russian.'
  },
//Engine
  {
    name: 'Light Engine I',
    category: 'engine_DD',
    description: 'Wait, engine, like, boilers ? What about the turbines ? Amazing boilers are useless if your turbines are lame...'
  },
  {
    name: 'Light Engine II',
    category: 'engine_DD',
    description: 'You should be able to put multiple boilers per ship. Also, type of engine should not be restricted by class. After all, Katsuragi was propelled by Kagero boilers...'
  },
  {
    name: 'Light Engine III',
    category: 'engine_DD',
    description: 'Okay, cool, we are getting more power. That is not all there is to it tho. What about consumption ? Also, why is the reliability malus the same on every engine ? Some were studied specifically to be more durable...'
  },
  {
    name: 'Light Engine IV',
    category: 'engine_DD',
    description: 'Do not accidentally lose the technology after implementing it on one vessel because it was so complex that you have no idea how to recreate it again. Just saying, some people did that...'
  },
//Mine warfare
  {
    name: 'Minelaying Rails',
    category: 'mine',
    description: 'This little piece of equipment is the perfect way to say to your enemies : this area is MINE !... okay, that one was easy'
  },
  {
    name: 'Minesweeping Gear',
    category: 'mine',
    description: 'Gear here means parvanes and guns to shot at the mines that surface. So, should Minesweeping Gear give some AA ? Or AA guns some minesweeping...?'
  },
//Anti-Submarine warfare
  {
    name: 'Depth Charge I',
    category: 'asw',
    description: 'It is a box filled with something that explodes. As basic as it gets'
  },
  {
    name: 'Depth Charge II',
    category: 'asw',
    description: 'It is still a box filled with something that explodes. Still as basic as it gets'
  },
  {
    name: 'Depth Charge III',
    category: 'asw',
    description: '... Gee, the depth charge concept does not change much, it is and will remain an explosive box ! It is the way one launchs it that changes everything !'
  },
  {
    name: 'Depth Charge IV',
    category: 'asw',
    description: 'If you are still using regular depth charges in 1944 you do not deserve any stat improvement.'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/