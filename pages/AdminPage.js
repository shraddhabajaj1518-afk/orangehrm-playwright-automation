export class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminMenu = page.getByRole('link', { name: 'Admin' });
    this.addBtn = page.getByRole('button', { name: 'Add' });
    this.usernameInput = page.locator('input').nth(1);
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.searchBtn = page.getByRole('button', { name: 'Search' });
    this.deleteBtn = page.getByRole('button', { name: 'Delete' });
  }

  async openAdmin() {
    await this.adminMenu.click();
  }

  async searchUser(username) {
    await this.usernameInput.fill(username);
    await this.searchBtn.click();
  }
}
