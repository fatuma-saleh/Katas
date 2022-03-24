function calculateChange(total, cash) {
  // Your code here
  let totalChange = {twentyDollars:0, tenDollars:0, fiveDollars:0, twoDollars:0, oneDollar:0,
    quarter:0, dime:0, nickel:0, Penny:0 };

  let change = cash - total;
  let temp = change;
  
while(temp > 0){
  
    if(temp - 2000 >= 0){
      totalChange.twentyDollars += 1;
      temp -= 2000;
    }   
    else if(temp - 1000 >= 0){
      totalChange.tenDollars += 1;
      temp -= 1000;
    } 
    else if(temp - 500 >= 0){
      totalChange.fiveDollars += 1;
      temp -= 500;
      }
  
    else if(temp - 200 >= 0){
      totalChange.twoDollars += 1;
      temp -= 200;
    }
    
    else if(temp - 100 >= 0){
      totalChange.oneDollar += 1;
      temp -= 100;
    }
  
    else if(temp - 25 >= 0){
        totalChange.quarter += 1;
        temp -= 25;
    }
    
    else if(temp - 10 >= 0){
        totalChange.dime += 1;
        temp -= 10;
    }
      
    else if(temp - 5 >= 0){
        totalChange.nickel += 1;
        temp -= 5;  
    }
  
    else if(temp - 1 >= 0){
        totalChange.Penny += 1;
        temp -= 1;
    } 
    
    else if(temp - 0.9 >= 0){
      totalChange.Penny += 1;
      temp -= 0.9;
    } 
    
    else{
      break;
    }
}

if(totalChange.twentyDollars === 0){
  delete totalChange.twentyDollars;
  }

if(totalChange.tenDollars === 0){
    delete totalChange.tenDollars;
  }
if(totalChange.fiveDollars === 0){
    delete totalChange.fiveDollars;
  }
  if(totalChange.twoDollars === 0){
    delete totalChange.twoDollars;
  }
  if(totalChange.oneDollar === 0){
    delete totalChange.oneDollar;
  }
  if(totalChange.quarter === 0){
    delete totalChange.quarter;
  }
  if(totalChange.dime === 0){
    delete totalChange.dime;
  }
  if(totalChange.nickel === 0){
    delete totalChange.nickel;
  }
  if(totalChange.Penny === 0){
    delete totalChange.Penny;
  }
  if(totalChange.Penny === 0){
    delete totalChange.Penny;
  }
  
  return totalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//Expected output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 