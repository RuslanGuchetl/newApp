# newApp

F.A.Q:

Q: JAVA_HOME is not set error      
 
A: $sudo apt install openjdk-8-jdk    
and    
$export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64    
or add     
JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64"    
to etc/environment     



Q: Build Failed    
Error type 3  
Error: Activity class {com.newapp/com.newapp.MainActivity} does not exist.

A: $ adb uninstall "com.newapp"
