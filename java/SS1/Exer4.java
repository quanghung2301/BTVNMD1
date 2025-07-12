public class Exer4 {
public static void main(String[] args){
  // khai bao a va b
  int a = 31;
  int b = 5;
  // phep toan
  int sum = a + b;
  int diff = a - b;
  int product = a * b;
  int quotient = a / b;
  int remainder = a % b;
  // in ta man hinh
  System.out.printf("gia tri cua a la %d," ,a);

  System.out.printf("gia tri cua b la %d," ,b);
  System.out.printf("TONG CUA A VA B LA %d," ,sum);
  System.out.printf("hieu CUA A VA B LA %d," ,diff);
  System.out.printf("tich CUA A VA B LA %d," ,product);
  System.out.printf("THUONG CUA A VA B LA %d," ,quotient);
  System.out.printf("phan du khi chia A cho B LA %d." ,remainder);

}
}
