<template>
  <article>
    <section class="section">
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="imgfix" src="/ub.jpg" alt="UNBOXX DJ Event" loading="lazy">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">UNBOXX #1 #2 #3</p>
                <p class="subtitle is-6">Shibuya - 円山町</p>
              </div>
            </div>
            <div class="content">
              <div>
                Open :
                <div class="color">
                  Every Friday / 19:30
                </div>
              </div>
              <div>
                Concept :
                <div class="color">
                  All Genre B2B
                </div>
              </div>
              <div>
                Mixed :
                <div class="color">
                  #R&B #Techno #House #J-POP #Trance #HardDance
                </div>
              </div>
              <div class="subtitle is-5">Event Finished 🙇</div>
            </div>
          </div>
        </div>
        <div class="separator"></div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="imgfix" src="/ubl.jpg" alt="UNBOXX Live DJ Event" loading="lazy">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">UNBOXX lounge #1</p>
                <p class="subtitle is-6">Shibuya - 円山町</p>
              </div>
            </div>
            <div class="content">
              <div>
                Open :
                <div class="color">
                  Every Friday / 19:30
                </div>
              </div>
              <div>
                Concept :
                <div class="color">
                  All Genre Lounge
                </div>
              </div>
              <div>
                Mixed :
                <div class="color">
                  #House #R&B #HipHop
                </div>
              <div class="subtitle is-5">Event Finished 🙇</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="imgfix" src="/wl.jpg" alt="UNBOXX Lounge DJ Event" loading="lazy">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">WeekenderLounge</p>
                <p class="subtitle is-6">Shibuya - 円山町</p>
              </div>
            </div>
            <div class="content">
              <div>
                Open :
                <div class="color">
                  Every Friday / 19:30
                </div>
              </div>
              <div>
                Concept :
                <div class="color">
                  Lounge music
                </div>
              </div>
              <div>
                Mixed :
                <div class="color">
                  #HipHop #R&B #House #DeepHouse
                </div>
              <div class="subtitle is-5">Event Finished 🙇</div>
              </div>
            </div>
          </div>
        </div>
        <div class="separator"></div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="imgfix" src="/noimage.jpg" alt="DJ Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Party Vol.1</p>
                <p class="subtitle is-6">Roppongi - Cube</p>
              </div>
            </div>
            <div class="content">
              <div>
                Concept :
                <div class="color">
                  All genre party
                </div>
              </div>
              <div>
                Mixed :
                <div class="color">
                  #House #Techno #J-POP
                </div>
              </div>
              <div class="subtitle is-5">Event Finished 🙇</div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="imgfix" src="/noimage.jpg" alt="DJ Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Reception Party</p>
                <p class="subtitle is-6">Akasaka</p>
              </div>
            </div>
            <div class="content">
              <div>
                Open :
                <div class="color">
                  Feb 3 / 19:00
                </div>
              </div>
              <div>
                Concept :
                <div class="color">
                  Art reception event
                </div>
              </div>
              <div>
                Mixed :
                <div class="color">
                  #HipHop #R&B #House
                </div>
              <div class="subtitle is-5">Event Finished 🙇</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </article>
</template>

<script setup>
useHead({
  title: 'DJ Events - nakashun.com',
  meta: [
    { name: 'description', content: 'DJイベントの出演履歴とパフォーマンス情報' },
    { name: 'og:title', content: 'DJ Events - nakashun.com' },
    { name: 'og:description', content: 'DJイベントの出演履歴とパフォーマンス情報' },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
  ]
})
</script>

<style>
.sections{
  margin-top: 10px;
  margin-bottom: 10px;
}
.color{
  color: rgb(0, 162, 138);
  display: inline;
}
.imgfix{
  object-fit: cover;
}
.separator{
  margin: 1.5rem;
}
</style>
