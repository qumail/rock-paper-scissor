var express =require('express')
var bodyParser = require('body-parser');
var { urlencoded } = require('body-parser');
//const { response } = require('express');
  
var app = express()

app.use(bodyParser.urlencoded({extended: true}))

let playerOneTwo = 0;
    

app.get('/rps',(req,res)=>{
    res.sendFile('./front.html', {root: __dirname }) 
    
})
app.post('/rps/result',(req,res)=>{
   var playerOne = (req.body.player_one)
   var playerTwo = (req.body.player_two)
   var playerThree = (req.body.player_three)
   var playerFour = (req.body.player_four)
      //console.log(playerOne)
      //console.log(playerTwo)
      //console.log(playerThree)
      //console.log(playerFour)
        
                  // Rules for player 1
                  
            if(playerOne == 'rock' && playerTwo == 'scissor' || playerOne== 'paper' && playerTwo=="rock" || playerOne=="scissor" && playerTwo=="paper"){
                 playerOneTwo++;
                console.log(playerOneTwo)
                //res.send(JSON.stringify(playerOneTwo))           
            }else{
                   var playerOneTwo = 0
            }
        
            if(playerOne == 'rock' && playerThree == 'scissor' || playerOne== 'paper' && playerThree=="rock" || playerOne=="scissor" && playerThree=="paper"){
                var playerOneThree = 1
            }else{
                var playerOneThree = 0
            }
        
            if(playerOne == 'rock' && playerFour == 'scissor' || playerOne== 'paper' && playerFour=="rock" || playerOne=="scissor" && playerFour=="paper"){
                var playerOneFour = 1
            }else{
                var playerOneFour =0
            }
             // Rules for Player 2
             if(playerTwo == 'rock' && playerOne == 'scissor' || playerTwo== 'paper' && playerOne =="rock" || playerTwo=="scissor" && playerOne=="paper"){
                var playerTwoOne = 1
                //console.log(playerTwoOne)
                //res.send(JSON.stringify(playerOneTwo))
                        
            }else{
                   var playerTwoOne = 0
            }
        
            if(playerTwo == 'rock' && playerThree == 'scissor' || playerTwo== 'paper' && playerThree=="rock" || playerTwo=="scissor" && playerThree=="paper"){
                var playerTwoThree = 1
            }else{
                var playerTwoThree = 0
            }
        
            if(playerTwo == 'rock' && playerFour == 'scissor' || playerTwo== 'paper' && playerFour=="rock" || playerTwo=="scissor" && playerFour=="paper"){
                var playerTwoFour = 1
            }else{
                var playerTwoFour =0
            }

            // Rules for Player 3
            if(playerThree == 'rock' && playerOne == 'scissor' || playerThree== 'paper' && playerOne =="rock" || playerThree=="scissor" && playerOne=="paper"){
                var playerThreeOne = 1
                //console.log(playerThreeOne)
                //res.send(JSON.stringify(playerOneTwo))
                        
            }else{
                   var playerThreeOne = 0
            }
        
            if(playerThree == 'rock' && playerTwo == 'scissor' || playerThree== 'paper' && playerTwo=="rock" || playerThree=="scissor" && playerTwo=="paper"){
                var playerThreeTwo = 1
            }else{
                var playerThreeTwo = 0
            }
        
            if(playerThree == 'rock' && playerFour == 'scissor' || playerThree== 'paper' && playerFour=="rock" || playerThree=="scissor" && playerFour=="paper"){
                var playerThreeFour = 1
            }else{
                var playerThreeFour =0
            }

            // Rules for Player 4

            if(playerFour == 'rock' && playerOne == 'scissor' || playerFour== 'paper' && playerOne =="rock" || playerFour=="scissor" && playerOne=="paper"){
                var playerFourOne = 1
                //console.log(playerFourOne)
                //res.send(JSON.stringify(playerOneTwo))
                        
            }else{
                   var playerFourOne = 0
            }
        
            if(playerFour == 'rock' && playerTwo == 'scissor' || playerFour== 'paper' && playerTwo=="rock" || playerFour=="scissor" && playerTwo=="paper"){
                var playerFourTwo = 1
            }else{
                var playerFourTwo = 0
            } 
        
            if(playerFour == 'rock' && playerThree == 'scissor' || playerFour == 'paper' && playerThree=="rock" || playerFour =="scissor" && playerThree=="paper"){
                var playerFourThree = 1
            }else{
                var playerFourThree =0
            }
         
    
  



})
app.listen(4000)