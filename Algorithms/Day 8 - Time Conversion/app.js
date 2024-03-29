//Time Conversion
/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Example
○ s='12:01:00PM'
    Return '12:01:00'.
○ s='12:01:00AM'
    Return '00:01:00'.
Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

○ string s: a time in 12 hour format

Returns
○ string: the time in 24 hour format

Input Format

A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints
○ All input times are valid

Sample Input 0
07:05:45PM

Sample Output 0
19:05:45
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here 
    let time = s
    let hour = `${time[0]}${time[1]}`

    if(time.includes('PM')){
     
        let convertedHour = hour 
        
        if(hour != '12'){
            convertedHour = parseFloat(`${hour}`)+12 
        }
        
        let militaryTimePM = time.replace(hour, convertedHour).substring(0, time.length -2)
        
            return militaryTimePM
            
        }
        
        if(time.includes('AM') && hour === '12'){
            
            let militaryTimeAM = time.replace('12', '00').substring(0, time.length -2)
                return militaryTimeAM
                
            } else if(time.includes('AM') && hour != '12'){
                
                let otherMidnightHrs = time.substring(0, time.length -2)
                
                    return otherMidnightHrs
                }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
