---
date: '{{ now.Format "Monday, January 2, 2006"}}'
title: '{{ .File.TranslationBaseName | replaceRE "-" " " | title }}'
description: "This is a short description of the page"
draft: true
---