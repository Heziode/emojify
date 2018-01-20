# Emojify

Binding of [emojify (bash version)](https://github.com/mrowa44/emojify) to fix issues (unnecessary space, punctuation chars, etc.)



## Emoji on the command line:tada:

Basically, emojify substitutes emoji aliases that many services (like [GitHub](https://github.com/)) use for emoji raw characters.



## Installation

[emojify](https://github.com/heziode/emojify/blob/master/emojify) is a shell script, so put it somewhere and make sure it's added to your `$PATH`.

Here's a one-liner:

```bash
sudo sh -c "curl https://raw.githubusercontent.com/heziode/emojify/master/emojify -o /usr/local/bin/emojify && chmod +x /usr/local/bin/emojify"
```





## Usage

Here's a clever example:

```bash
emojify "Hey, I just :raising_hand: you, and this is :scream: , but here's my :calling: , so :telephone_receiver: me, maybe?"
```

would output:

> Hey, I just :raising_hand: you, and this is :scream: , but here's my
> :calling: , so :telephone_receiver: me, maybe?



Or maybe:

```bash
emojify "To :bee: , or not to :bee: : that is the question... To take :muscle: against a :ocean: of troubles, and by opposing, end them?"
```

> To :bee: , or not to :bee: : that is the question... To take :muscle: against
> a :ocean: of troubles, and by opposing, end them?

Or you could run it through git log with something like:

```bash
git log --oneline --color | emojify | less -r
```

To have an alias that does that for you, add something like:

```
log = ! git log --oneline --color | emojify | less -r
```

to your `~/.gitconfig`.

Note: if you want colors you need to specify the `--color` option.

To invoke help run `emojify -h`.



## Related

-   [pyemojify](https://github.com/lord63/pyemojify) - python port
-   [emojify](https://github.com/mrowa44/emojify) - bash port



## License

MIT