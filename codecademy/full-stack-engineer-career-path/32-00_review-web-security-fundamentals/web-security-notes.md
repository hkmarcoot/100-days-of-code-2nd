In summary, the OWASP Top Ten consists of:

- Injection: An attacker “injects” malicious code into an interpreter, usually through an input field, in order to gain access to information or damage a system
- Broken Authentication: An insecure authentication system allows attackers to impersonate other users.
- Sensitive Data Exposure: Sensitive data is improperly or insufficiently protected.
- XML External Entities (XXE): Malicious XML causes an insecure XML processor to access data or execute code that it shouldn’t.
- Broken Access Control: Authorization isn’t properly enforced, allowing attackers to access resources beyond their authorization.
- Security Misconfiguration: Insecure, improper, or a lack of security configurations degrade the security of an environment.
- Cross-Site Scripting (XSS): Malicious input is treated as javascript that can run on victims’ browsers.
- Insecure Deserialization: Data from an untrusted source is deserialized into an object, potentially containing malicious code or data, within a program.
- Using Components with Known Vulnerabilities: Vulnerable components, such as out-of-date packages or software, are included within an environment, allowing attackers to use existing exploits to attack.
- Insufficient Logging and Monitoring: Lack of detailed monitoring makes it easier for attackers to stay undetected, and it makes it harder to respond after an attack has occurred.
