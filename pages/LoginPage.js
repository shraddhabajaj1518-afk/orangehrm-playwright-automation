export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async login() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    await this.username.fill('Admin');
    await this.password.fill('admin123');
    await this.loginBtn.click();
  }
}
