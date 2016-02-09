'use strict';

// Declare app level module which depends on views, and components
(function(){
	angular.module('basketballApp', [])
		.controller('BasketballAppController', function(){
			this.players = players;
            this.original = players.slice(0);
            this.sorted = false;
		    
            this.toggleText = function(){
                return !this.sorted;
            }

            this.orderSort = function(){
                var tempPlayers = players.slice(0);
                if(this.sorted){
                    this.players = this.original;
                    this.sorted = false;
                }else{
                    this.sorted = true;
                    tempPlayers.sort(this.compare);
                    this.players = tempPlayers;
                }
            };

            this.reverseSort = function(){
                var tempPlayers = players.slice(0);
                if(this.sorted){
                    this.players = this.original;
                    this.sorted = false;
                }else{
                    this.sorted = true;
                    tempPlayers.sort(this.reverseCompare);
                    this.players = tempPlayers;
                }
            }

            this.reverseCompare = function(a,b){
                if (a.first == b.first){
                    if(a.last > b.last)
                        return -1;
                    else if(a.last < b.last)
                        return 1;
                    else
                        return 0;
                }else{
                    if(a.first > b.first)
                        return -1;
                    else if(a.first < b.first)
                        return 1;
                    else
                        return 0;
                }
            };


            this.compare = function(a,b){
                if (a.first == b.first){
                    if(a.last < b.last)
                        return -1;
                    else if(a.last > b.last)
                        return 1;
                    else
                        return 0;
                }else{
                    if(a.first < b.first)
                        return -1;
                    else if(a.first > b.first)
                        return 1;
                    else
                        return 0;
                }
            };
		})

	var players = [
    {
        first: "Brice",
        last: "Johnson",
        position: "F",
        height: "6-9",
        year: "SR",
        images: [
            "http://img.bleacherreport.net/img/images/photos/002/646/125/hi-res-164351660-brice-johnson-of-the-north-carolina-tar-heels_crop_north.jpg?w=630&h=420&q=75",
            "http://img.bleacherreport.net/img/images/photos/003/069/345/hi-res-586176cb4267aeca5d0d1e400905324e_crop_north.jpg?w=630&h=420&q=75",
        ],
        games: 15,
        minutes: 384,
        fieldGoals: 93,
        fieldGoalsAttempted: 150,
        twoPoints: 93,
        twoPointsAttempted: 150,
        threePoints: 0,
        threePointsAttempted: 0,
        freeThrows: 43,
        freeThrowsAttempted: 51,
        offensiveRebounds: 33,
        defensiveRebounds: 113,
        assists: 19,
        steals: 13,
        blocks: 15,
        turnovers: 16,
        fouls: 42,
        points: 229
    },
    {
        first: "Justin",
        last: "Jackson",
        position: "F",
        height: "6-8",
        year: "SO",
        images: [
        ],
        games: 15,
        minutes: 424,
        fieldGoals: 79,
        fieldGoalsAttempted: 157,
        twoPoints: 67,
        twoPointsAttempted: 109,
        threePoints: 12,
        threePointsAttempted: 48,
        freeThrows: 28,
        freeThrowsAttempted: 39,
        offensiveRebounds: 25,
        defensiveRebounds: 37,
        assists: 51,
        steals: 13,
        blocks: 7,
        turnovers: 20,
        fouls: 29,
        points: 198
    },
    {
        first: "Joel",
        last: "Berry",
        position: "G",
        height: "6-0",
        year: "SO",
        images: [
        ],
        games: 15,
        minutes: 456,
        fieldGoals: 65,
        fieldGoalsAttempted: 151,
        twoPoints: 41,
        twoPointsAttempted: 86,
        threePoints: 24,
        threePointsAttempted: 65,
        freeThrows: 34,
        freeThrowsAttempted: 42,
        offensiveRebounds: 9,
        defensiveRebounds: 36,
        assists: 65,
        steals: 21,
        blocks: 2,
        turnovers: 31,
        fouls: 33,
        points: 188
    },
    {
        first: "Isaiah",
        last: "Hicks",
        position: "F",
        height: "6-8",
        year: "JR",
        images: [
        ],
        games: 15,
        minutes: 282,
        fieldGoals: 54,
        fieldGoalsAttempted: 78,
        twoPoints: 54,
        twoPointsAttempted: 78,
        threePoints: 0,
        threePointsAttempted: 0,
        freeThrows: 37,
        freeThrowsAttempted: 48,
        offensiveRebounds: 27,
        defensiveRebounds: 33,
        assists: 14,
        steals: 8,
        blocks: 8,
        turnovers: 14,
        fouls: 36,
        points: 145
    },
    {
        first: "Marcus",
        last: "Paige",
        position: "Guard",
        height: "6-1",
        year: "SR",
        images: [
            "https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/54607/0714741001427212108_filepicker.jpg",
            "http://sports.cbsimg.net/images/visual/whatshot/0324_UNC-Paige_inside.jpg",
            "http://thrownawaytoworthy.com/wp-content/uploads/2014/11/paige.jpg"
        ],
        games: 9,
        minutes: 260,
        fieldGoals: 45,
        fieldGoalsAttempted: 90,
        twoPoints: 26,
        twoPointsAttempted: 45,
        threePoints: 19,
        threePointsAttempted: 45,
        freeThrows: 24,
        freeThrowsAttempted: 30,
        offensiveRebounds: 3,
        defensiveRebounds: 20,
        assists: 32,
        steals: 8,
        blocks: 4,
        turnovers: 6,
        fouls: 11,
        points: 133
    },
    {
        first: "Nate",
        last: "Britt",
        position: "G",
        height: "6-1",
        year: "JR",
        images: [
        ],
        games: 15,
        minutes: 274,
        fieldGoals: 38,
        fieldGoalsAttempted: 93,
        twoPoints: 21,
        twoPointsAttempted: 52,
        threePoints: 17,
        threePointsAttempted: 41,
        freeThrows: 19,
        freeThrowsAttempted: 24,
        offensiveRebounds: 5,
        defensiveRebounds: 21,
        assists: 26,
        steals: 8,
        blocks: 0,
        turnovers: 15,
        fouls: 16,
        points: 112
    },
    {
        first: "Kennedy",
        last: "Meeks",
        position: "F",
        height: "6-9",
        year: "JR",
        images: [
        ],
        images: [
            "http://i.imgur.com/I6VPCtp.jpg",
            "http://www.rantsports.com/ncaa-basketball/files/2014/01/kennedy-meeks.jpg",
        ],
        games: 9,
        minutes: 220,
        fieldGoals: 47,
        fieldGoalsAttempted: 79,
        twoPoints: 47,
        twoPointsAttempted: 79,
        threePoints: 0,
        threePointsAttempted: 0,
        freeThrows: 17,
        freeThrowsAttempted: 24,
        offensiveRebounds: 19,
        defensiveRebounds: 48,
        assists: 14,
        steals: 13,
        blocks: 12,
        turnovers: 16,
        fouls: 24,
        points: 111
    },
    {
        first: "Theo",
        last: "Pinson",
        position: "G",
        height: "6-6",
        year: "SO",
        images: [
        ],
        games: 15,
        minutes: 321,
        fieldGoals: 28,
        fieldGoalsAttempted: 69,
        twoPoints: 14,
        twoPointsAttempted: 35,
        threePoints: 14,
        threePointsAttempted: 34,
        freeThrows: 27,
        freeThrowsAttempted: 40,
        offensiveRebounds: 17,
        defensiveRebounds: 41,
        assists: 50,
        steals: 8,
        blocks: 8,
        turnovers: 23,
        fouls: 25,
        points: 97
    },
    {
        first: "Joel",
        last: "James",
        position: "F",
        height: "6-10",
        year: "SR",
        images: [
        ],
        games: 15,
        minutes: 165,
        fieldGoals: 17,
        fieldGoalsAttempted: 42,
        twoPoints: 17,
        twoPointsAttempted: 42,
        threePoints: 0,
        threePointsAttempted: 0,
        freeThrows: 10,
        freeThrowsAttempted: 18,
        offensiveRebounds: 19,
        defensiveRebounds: 29,
        assists: 0,
        steals: 1,
        blocks: 5,
        turnovers: 10,
        fouls: 24,
        points: 44
    },
    {
        first: "Luke",
        last: "Maye",
        position: "F",
        height: "6-7",
        year: "FR",
        images: [
        ],
        games: 14,
        minutes: 100,
        fieldGoals: 8,
        fieldGoalsAttempted: 21,
        twoPoints: 7,
        twoPointsAttempted: 17,
        threePoints: 1,
        threePointsAttempted: 4,
        freeThrows: 3,
        freeThrowsAttempted: 8,
        offensiveRebounds: 16,
        defensiveRebounds: 15,
        assists: 4,
        steals: 1,
        blocks: 2,
        turnovers: 3,
        fouls: 13,
        points: 20
    },
    {
        first: "Kenny",
        last: "Williams",
        position: "G",
        height: "6-3",
        year: "FR",
        images: [
        ],
        games: 12,
        minutes: 64,
        fieldGoals: 6,
        fieldGoalsAttempted: 16,
        twoPoints: 6,
        twoPointsAttempted: 7,
        threePoints: 0,
        threePointsAttempted: 9,
        freeThrows: 2,
        freeThrowsAttempted: 2,
        offensiveRebounds: 1,
        defensiveRebounds: 4,
        assists: 4,
        steals: 3,
        blocks: 0,
        turnovers: 0,
        fouls: 4,
        points: 14
    },
    {
        first: "Kanler",
        last: "Coker",
        position: "G",
        height: "6-4",
        year: "JR",
        images: [
        ],
        games: 8,
        minutes: 10,
        fieldGoals: 1,
        fieldGoalsAttempted: 4,
        twoPoints: 1,
        twoPointsAttempted: 2,
        threePoints: 0,
        threePointsAttempted: 2,
        freeThrows: 0,
        freeThrowsAttempted: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 3,
        assists: 1,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        fouls: 1,
        points: 2
    },
    {
        first: "Spenser",
        last: "Dalton",
        position: "G",
        height: "6-3",
        year: "SR",
        images: [
        ],
        games: 8,
        minutes: 10,
        fieldGoals: 1,
        fieldGoalsAttempted: 6,
        twoPoints: 1,
        twoPointsAttempted: 1,
        threePoints: 0,
        threePointsAttempted: 5,
        freeThrows: 0,
        freeThrowsAttempted: 0,
        offensiveRebounds: 1,
        defensiveRebounds: 1,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 1,
        fouls: 1,
        points: 2
    },
    {
        first: "Stilman",
        last: "White",
        position: "G",
        height: "6-0",
        year: "JR",
        images: [
        ],
        games: 8,
        minutes: 13,
        fieldGoals: 1,
        fieldGoalsAttempted: 4,
        twoPoints: 1,
        twoPointsAttempted: 4,
        threePoints: 0,
        threePointsAttempted: 0,
        freeThrows: 0,
        freeThrowsAttempted: 0,
        offensiveRebounds: 2,
        defensiveRebounds: 2,
        assists: 1,
        steals: 0,
        blocks: 0,
        turnovers: 1,
        fouls: 2,
        points: 2
    },
    {
        first: "Justin",
        last: "Coleman",
        position: "G",
        height: "6-2",
        year: "SR",
        images: [
        ],
        games: 5,
        minutes: 7,
        fieldGoals: 0,
        fieldGoalsAttempted: 0,
        twoPoints: 0,
        twoPointsAttempted: 0,
        threePoints: 0,
        threePointsAttempted: 0,
        freeThrows: 2,
        freeThrowsAttempted: .500,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 1,
        fouls: 1,
        points: 0
    },
    {
        first: "Toby",
        last: "Egbuna",
        position: "F",
        height: "6-4",
        year: "SR",
        images: [
        ],
        games: 8,
        minutes: 10,
        fieldGoals: 0,
        fieldGoalsAttempted: 5,
        twoPoints: 0,
        twoPointsAttempted: 2,
        threePoints: 0,
        threePointsAttempted: 3,
        freeThrows: 0,
        freeThrowsAttempted: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 2,
        assists: 0,
        steals: 1,
        blocks: 0,
        turnovers: 1,
        fouls: 1,
        points: 0
    }
];
})();



