# Navicommit

<img src="https://i.imgur.com/h4BiMyZ.png" alt="POWERED WITH " width="800"/>

*<span style="color:rgb(48, 65, 92)">**Navicommit**</span> is a CLI tool designed to help you write better commit messages.*

## Table of Contents

- 🌟 [Features](#features)
- 📦 [Installation](#installation)
- 📖 [Usage](#usage)
- 🧩 [Dependencies](#dependencies)
- 📄 [License](#license)
- ✍🏻 [Author](#author)

## 🌟 Features

- **Easy to use**: <span style="color:rgb(48, 65, 92)">**Navicommit**</span> guides you through a series of questions to generate a commit message.
- **Consistent**: <span style="color:rgb(48, 65, 92)">**Navicommit**</span> helps you write consistent commit messages across your projects.


## 📦 Installation

We recommend to install <span style="color:rgb(48, 65, 92)">**Navicommit**</span> globally on your system. Use the following command:

```sh
npm install -g navicommit
```

To install <span style="color:rgb(48, 65, 92)">**Navicommit**</span> locally in your project, use the following command:

```sh
npm install navicommit --save-dev
```

## 📖 Usage

<details>
<summary>Usage with global installation</summary>

After installing <span style="color:rgb(48, 65, 92)">**Navicommit**</span> globally, you can use it with the following command:

```sh
navi commit
```

or with the alias:

```sh
navi c
```
</details>

<details>
<summary>Local use with npx</summary>

You can use <span style="color:rgb(48, 65, 92)">**Navicommit**</span> (without installing it) with npx:

```sh
npx navicommit c
```

</details>

<details>
<summary>Usage with local installation (requires a script)</summary>

Add a script to your `package.json`:

```json
"scripts": {
  "commit": "navi commit",
}
```

Then you can run the script using npm:

```sh
npm run commit
```
</details>

---

<span style="color:rgb(48, 65, 92)">**Navicommit**</span> will guide you through a series of questions to generate an appropriate commit message.

**Once the commit is generated, copy-paste it in your Terminal.**

## 🧩 Dependencies

- [commander](https://www.npmjs.com/package/commander)
- [inquirer](https://www.npmjs.com/package/inquirer)

## 📄 License

This project is licensed under the MIT License.

## ✍🏻 Author

Louis-Antonin Lesieur
