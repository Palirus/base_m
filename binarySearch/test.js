length_arr=1000;
A=[];										//произвольный массив
i=0;
while(i<length_arr){
A[i]=-length_arr/2+i;
i++;
}
describe("binarySearch", function() {
    
	function Test(x){	
	it("поиск элемента "+x+" в массиве", function() {
    assert((binarySearch(A,x)!==-1));
	})}
	
	for(var i=A[0];i<A.length/2;i++){
	Test(i)}
})


