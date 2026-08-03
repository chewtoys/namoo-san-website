<template>
  <article>
    <div class="hero-body">
      <div class="has-text-centered">
        <p class="title">
          📄
        </p>
        <p class="subtitle">
          Resume
        </p>
      </div>
    </div>

    <ResumeNavigation />

    <section class="section">
      <div class="columns">
        <div class="column">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://avatars3.githubusercontent.com/u/27718737?v=4" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>nakashun</strong> <small>@nakashunsan</small>
                    <small>(28)</small>
                    <br />
                  </p>
                  <p>
                    情報システム・コーポレートITの分野でフリーランスとして活動しているnakashunです。<br />
                    前職はEurekaでコーポレートITチーム（MISチーム）のマネージャーを担当していました。<br />
                    人々が便利になるようなモノを作るのが好きです。<br />
                  </p>
                  <p>
                    幼少期からパソコンに触れ、インフラの構築やコーディングなど<br />
                    ジャンルを問わず課題をテクノロジーを使って解決することが好きです。<br />
                  </p>
                  <p>
                    「ITが正しく使われている社会を目指す」のが仕事のモチベーションです。<br />
                    知識・技術・ツールが手段として利活用されている組織を増やしたいです。<br />
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column">
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th><abbr title="Year">Year</abbr></th>
                  <th><abbr title="Month">Month</abbr></th>
                  <th>Educational background</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>2001</th>
                  <th>April</th>
                  <td>小学校入学</td>
                </tr>
                <tr>
                  <th>2007</th>
                  <th>March</th>
                  <td>小学校卒業</td>
                  <td />
                </tr>
                <tr>
                  <th>2007</th>
                  <th>April</th>
                  <td>中学校入学</td>
                  <td />
                </tr>
                <tr>
                  <th>2010</th>
                  <th>March</th>
                  <td>中学校卒業</td>
                  <td />
                </tr>
                <tr>
                  <th>2010</th>
                  <th>April</th>
                  <td>高校入学</td>
                  <td />
                </tr>
                <tr>
                  <th>2013</th>
                  <th>March</th>
                  <td>高校卒業</td>
                  <td />
                </tr>
                <tr>
                  <th>2013</th>
                  <th>April</th>
                  <td>専門学校入学</td>
                  <td />
                </tr>
                <tr>
                  <th>2015</th>
                  <th>June</th>
                  <td>専門学校中退</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
useHead({
  title: "nakashun.com - Resume",
  meta: [
    { name: "robots", content: "noindex" },
  ],
})
</script>

<style></style>
