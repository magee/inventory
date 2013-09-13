#!/usr/bin/env bash
echo "Watching stylus source files for changes... ^C to exit"
BASEDIR=$(cd $(dirname $0) && pwd)
SRCDIR="$BASEDIR/stylus"
DSTDIR="$BASEDIR/"
stylus --watch $SRCDIR --out $DSTDIR
echo "Never executed..."