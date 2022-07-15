// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";


//specify the version of solidity
pragma solidity ^0.8.1;



contract MoodDiary{
    string mood;
    function setMood(string memory _mood) public{
        mood = _mood;
    }
    function getMood() public view returns(string memory){
        return mood;
    }
}