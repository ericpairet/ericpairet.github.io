---
layout: default
title: Projects
permalink: /portfolio/
---

<h1>Portfolio</h1>

{%- for group in site.data.projects -%}

	<div class="wrapper-header">
	  <font size="4"><b>{{ group.name }}</b></font>
	</div>

	{% include projects.html projects=group.projects%}

{%- endfor -%}
