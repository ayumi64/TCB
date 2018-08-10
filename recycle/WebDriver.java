
package Demo;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
public class Demo{
public static void main(String[] args) {
   System.setProperty("webdriver.ie.driver",
     "F:\\Software\\selenium\\IEDriverServer.exe");//注意这里IEDriverServer.exe的文件存放路径
   DesiredCapabilities ieCapabilities = DesiredCapabilities
     .internetExplorer();
   ieCapabilities
     .setCapability(
       InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,
       true);
//new一个webdriver对象
   WebDriver driver = new InternetExplorerDriver(ieCapabilities);
//上面这一段是用来解决IE安全设置提示的
//通过webdriver的get方法调用浏览器，打开网页：http://www.google.com.hk
   driver.get("http://www.google.com.hk");
    //通过页面元素的name=q定位到查询输入框

   WebElement element = driver.findElement(By.name("q"));
  //在输入框输入‘hello Selenium!’
   element.sendKeys("hello Selenium!");
  //提交查询
   element.submit();
//等待，超时则抛出错误
   try {
    Thread.sleep(3000);
   } catch (InterruptedException e) {
    e.printStackTrace();
   }
//输出当前页面的title
   System.out.println("Page title is: " + driver.getTitle());
//关闭所有webdriver进程，退出
   driver.quit();
  }
 }
