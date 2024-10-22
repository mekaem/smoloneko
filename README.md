# 🐱 smol oneko

Want to add `oneko.js` to your site, but 5.41 KB is just too much? Now it's 1.65 KB!

The default image is `oneko.gif` in the same directory as the `index.html`. This allows for a shorter directory reference in the script, which saves a few bytes. This can be changed by modifying the `backgroundImage="url('oneko.gif')` variable in `oneko.js`.

**You should not do this unless your image is formatted as a sprite sheet with the individual frames mapped in the same positions as `oneko.gif`.** Improperly formatted images will **not** display correctly, as the script makes assumptions about the GIF grid.

*Optional: smol oneko also supports mobile via a helper script (minified to 229 bytes)! Add both `oneko.js` and `oneko_touch.js` to your directory with the corresponding `<script>` tags in your HTML.*

**Implementation:**

All scripts for smol oneko are located in the `/scripts` directory, and `oneko.gif` is located in the top-level directory.

```html
<script>src="oneko.js"></script>
<script>src="oneko_touch.js"</script>
```

## 📖 Lexicon

The variable names in the scripts have been truncated (and, as a side effect, obfuscated) to reduce file size. If you would like to tweak the scripts to your liking, see the [LEXICON.md](https://github.com/ovnanova/smoloneko/blob/main/LEXICON.md) for help.

## 🏆 Contributing

Feel free to submit a pull request if you see any fixes or further optimizations to be made. If you want to add functionality, I would suggest starting your own fork.

## 📜 License

This project is licensed under the MPL-2.0 License.

## 🤝 Acknowledgments

Credit to [adryd](https://github.com/adryd325/oneko.js) for the original script.

## 📺 Demo

[oneko.webm](https://github.com/user-attachments/assets/c1ce686e-207a-444f-8fc5-aa1b385223df)

