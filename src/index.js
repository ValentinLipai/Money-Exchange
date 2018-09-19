// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

	let errorMessageObj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
	let res = {};

	if ( currency > 10000 ) return errorMessageObj;
	if ( currency == 0 || currency < 0  ) return res;

	let halfDollars = 50,
		quarters = 25,
		dimes = 10,
		nickels = 5,
		pennie = 1;

	function exchange(cur, slag)
	{
		if ( currency != 0 )
		{
			var x = currency % cur;
	
			if ( x != currency ) 
			{
				res[slag] = ( ( currency - x) / cur );
				currency = x;
			}
		}
	}


	exchange(halfDollars, 'H');
	exchange(quarters, 'Q');
	exchange(dimes, 'D');
	exchange(nickels, 'N');
	exchange(pennie, 'P');

	return res;


    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
