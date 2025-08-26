class MathUtil {
  public static add(a: number, b: number): number {
    return a + b;
  }
  public static subtract(a: number, b: number): number {
    return a -b ;
  }
  public static multiply(a: number, b: number): number {
    return a  * b ;
  }
  public static divide(a: number, b: number): number {
    if (b == 0){
      console.log("a can't divide to 0")
    }
    return a / b;
  }
}
console.log(MathUtil.add(10, 5));      
console.log(MathUtil.subtract(10, 5));  
console.log(MathUtil.multiply(10, 5));  
console.log(MathUtil.divide(10, 0)); 