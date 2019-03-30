/**
 * 乱数を生成 引数は1個の場合、[0,minNum]間の乱数を生成 引数は2個の場合、[minNum,maxNum]間の乱数を生成 上記以外の場合、0を生成
 * 
 * @param minNum
 *            乱数の最小値
 * @param maxNum
 *            乱数の最大値
 * @returns 乱数
 */
function randomNum(minNum, maxNum) {
	var rtn;
	var iMin = parseInt(minNum);
	var iMax = parseInt(maxNum);
	switch (arguments.length) {
	case 1:
		rtn = parseInt(Math.random() * iMin + 1, 10);
		return rtn;
		break;
	case 2:
		rtn = parseInt(Math.random() * (iMax - iMin + 1) + iMin, 10);
		return rtn;
		break;
	default:
		return 0;
		break;
	}
}

function getPlusNum(minNum, maxNum, cnt) {
	switch (arguments.length) {
	case 3:
		var rtn = new Array()
		for (var i = 0; i < cnt; i++) {
			rtn[i] = randomNum(minNum, maxNum);
		}
		return rtn;
		break;
	default:
		return randomNum(minNum, maxNum);
		break;
	}
}