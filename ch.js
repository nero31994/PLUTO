const channels = {
    azz: {
        name: "A2Z",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
        keyId: "f703e4c8ec9041eeb5028ab4248fa094",
        key: "c22f2162e176eee6273a5d0b68d19530",
        type: "mpd",
        logo: "https://i.imgur.com/DVSTY3w.png"
    },
   
    anc: {
        name: "ANC",
        url: "https://d3cjss68xc4sia.cloudfront.net/out/v1/89ea8db23cb24a91bfa5d0795f8d759e/iex.mpd",
        keyId: "4bbdc78024a54662854b412d01fafa16",
        key: "6039ec9b213aca913821677a28bd78ae",
        type: "mpd",
        logo: "https://i.imgur.com/XzVYXaV.png"
    },
    bilyonaryo: {
        name: "BILYONARYO CHANNEL",
        url: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd",
        keyId: "227ffaf09bec4a889e0e0988704d52a2",
        key: "b2d0dce5c486891997c1c92ddaca2cd2",
        type: "mpd",
        logo: "https://i.imgur.com/Z5ZyJ8c.png"
    },
    dreamworks: {
        name: "DREAMWORKS (TAG)",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd",
        keyId: "564b3b1c781043c19242c66e348699c5",
        key: "d3ad27d7fe1f14fb1a2cd5688549fbab",
        type: "mpd",
        logo: "https://i.imgur.com/fh1Lg7b.png"
    },
    gma_pinoy: {
        name: "GMA PINOY TV",
        url: "https://amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono-dzsx9.amagi.tv/index.mpd",
        keyId: "c95ed4c44b0b4f7fa1c6ebbbbaab21a1",
        key: "47635b8e885e19f2ccbdff078c207058",
        type: "mpd",
        logo: "https://i.imgur.com/IA7tK2B.png"
    },
    ibc13: {
        name: "IBC 13",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd",
        keyId: "04e292bc99bd4ccba89e778651914254",
        key: "ff0a62bdf8920ce453fe680330b563a5",
        type: "mpd",
        logo: "https://i.imgur.com/PwFOHQb.png"
    },
    knowledge_channel: {
        name: "KNOWLEDGE CH",
        url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
        keyId: "0f856fa0412b11edb8780242ac120002",
        key: "783374273ef97ad3bc992c1d63e091e7",
        type: "mpd",
        logo: "https://i.imgur.com/UIqEr2y.png"
    },
    media_pilipinas: {
        name: "MEDIA PILIPINAS TV",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd",
        keyId: "6aab8f40536f4ea98e7c97b8f3aa7d4e",
        key: "139aa5a55ade471faaddacc4f4de8807",
        type: "mpd",
        logo: "https://i.imgur.com/BMCnoRn.png"
    },
    myx: {
        name: "MYX",
        url: "https://d24xfhmhdb6r0q.cloudfront.net/out/v1/e897a7b6414a46019818ee9f2c081c4f/index.mpd",
        keyId: "f40a52a3ac9b4702bdd5b735d910fd2f",
        key: "5ce1bc7f06b494c276252b4d13c90e51",
        type: "mpd",
        logo: "https://i.imgur.com/CIPTNnT.png"
    },
    one_news: {
        name: "ONE NEWS",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
        keyId: "d39eb201ae494a0b98583df4d110e8dd",
        key: "6797066880d344422abd3f5eda41f45f",
        type: "mpd",
        logo: "https://i.imgur.com/bmP06bk.png"
    },
        one_sports: {
        name: "ONE SPORTS",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
        keyId: "53c3bf2eba574f639aa21f2d4409ff11",
        key: "3de28411cf08a64ea935b9578f6d0edd",
        type: "mpd",
        logo: "https://i.imgur.com/btiNwYt.png"
    },   
    one_ph: {
        name: "ONE PH",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
        keyId: "92834ab4a7e1499b90886c5d49220e46",
        key: "a7108d9a6cfcc1b7939eb111daf09ab3",
        type: "mpd",
        logo: "https://i.imgur.com/9dMuFE1.png"
    },
    peoples_television: {
        name: "PEOPLE'S TELEVISION",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
        keyId: "71a130a851b9484bb47141c8966fb4a3",
        key: "ad1f003b4f0b31b75ea4593844435600",
        type: "mpd",
        logo: "https://i.imgur.com/ycPz1Uc.png"
    },
    pinoyBoxOffice: {
    name: "PINOY BOX OFFICE",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd",
    keyId: "dcbdaaa6662d4188bdf97f9f0ca5e830",
    key: "31e752b441bd2972f2b98a4b1bc1c7a1",
    type: "mpd",
    logo: "https://i.imgur.com/709Uy7N.png"
},

vivaCinema: {
    name: "VIVACINEMA",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd",
    keyId: "07aa813bf2c147748046edd930f7736e",
    key: "3bd6688b8b44e96201e753224adfc8fb",
    type: "mpd",
    logo: "https://i.imgur.com/8y3fc3F.png"
},

tagalogMovieChannel: {
    name: "TAGALIZED MOVIE CHANNEL",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd",
    keyId: "96701d297d1241e492d41c397631d857",
    key: "ca2931211c1a261f082a3a2c4fd9f91b",
    type: "mpd",
    logo: "https://i.imgur.com/ZbrvQpg.png"
},

tvnMoviesPinoy: {
    name: "TVN MOVIES PINOY",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
    keyId: "2e53f8d8a5e94bca8f9a1e16ce67df33",
    key: "3471b2464b5c7b033a03bb8307d9fa35",
    type: "mpd",
    logo: "https://i.imgur.com/e9vo9Z8.png"
},

cinemaOne: {
    name: "CINEMA ONE",
    url: "https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
    keyId: "58d0e56991194043b8fb82feb4db7276",
    key: "d68f41b59649676788889e19fb10d22c",
    type: "mpd",
    logo: "https://i.imgur.com/moSPpuJ.png"
},

cinemo: {
    name: "CINEMO",
    url: "https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd",
    keyId: "aa8aebe35ccc4541b7ce6292efcb1bfb",
    key: "aab1df109d22fc5d7e3ec121ddf24e5f",
    type: "mpd",
    logo: "https://i.imgur.com/2Jn7QHG.png"
},
    teleradyo: {
        name: "TELERADYO",
        url: "https://d14c00opfjb50c.cloudfront.net/out/v1/0fa4eb67579d41cca4ed146c93aa855f/index.mpd",
        keyId: "47c093e0c9fd4f80839a0337da3dd876",
        key: "50547394045b3d047dc7d92f57b5fb33",
        type: "mpd",
        logo: "https://i.imgur.com/Q81UWCk.png"
    },
    true_fm_tv: {
        name: "TRUE FM TV",
        url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
        keyId: "0559c95496d44fadb94105b9176c3579",
        key: "40d8bb2a46ffd03540e0c6210ece57ce",
        type: "mpd",
        logo: "https://i.imgur.com/U8L0Liq.png"
    },
    tvup: {
        name: "TVUP",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
        keyId: "83e813ccd4ca4837afd611037af02f63",
        key: "a97c515dbcb5dcbc432bbd09d15afd41",
        type: "mpd",
        logo: "https://i.imgur.com/HhxOIJq.png"
    },
    uaap_varsity: {
        name: "UAAP VARSITY",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
        keyId: "95588338ee37423e99358a6d431324b9",
        key: "6e0f50a12f36599a55073868f814e81e",
        type: "mpd",
        logo: "https://i.imgur.com/rifinVV.png"
    },
    kapamilya: {
        name: "KAPAMILYA CHANNEL",
        url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd",
        keyId: "bd17afb5dc9648a39be79ee3634dd4b8",
        key: "3ecf305d54a7729299b93a3d69c02ea5",
        type: "mpd",
        logo: "https://i.imgur.com/GEUL42b.png"
    },
    tv5: {
        name: "TV5",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
        keyId: "2615129ef2c846a9bbd43a641c7303ef",
        key: "07c7f996b1734ea288641a68e1cfdc4d",
        type: "mpd",
        logo: "https://i.imgur.com/jsCBRq0.png"
    },
    rptv: {
        name: "RPTV",
        url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
        keyId: "1917f4caf2364e6d9b1507326a85ead6",
        key: "a1340a251a5aa63a9b0ea5d9d7f67595",
        type: "mpd",
        logo: "https://i.imgur.com/IDCHfXm.png"
    },
    sari_sari: {
        name: "SARI-SARI",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
        keyId: "0a7ab3612f434335aa6e895016d8cd2d",
        key: "b21654621230ae21714a5cab52daeb9d",
        type: "mpd",
        logo: "https://i.imgur.com/kKuO7LD.png"
    },
    buko: {
        name: "BUKO CH",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
        keyId: "d273c085f2ab4a248e7bfc375229007d",
        key: "7932354c3a84f7fc1b80efa6bcea0615",
        type: "mpd",
        logo: "https://i.imgur.com/Du6LQCi.png"
    },

jungo: {
        name: 'JUNGO PINOY TV',
        url: 'https://jungotvstream-chanall.akamaized.net/jungotv/jungopinoytv/playlist_1080p.m3u8',
        type: 'hls',
        logo: 'https://static.wixstatic.com/media/3f6f0d_ab7b0ed79ba7476cb9522381586d4d0f~mv2.png/v1/fill/w_244,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/JungoPinoy_BrandLogo.png'  // <-- Fixed closing quote
         }, 
HALLYPOP: {
        name: 'HALLY POP',
        url: 'https://jungotvstream-chanall.akamaized.net/jungotv/hallypop/playlist_1080p.m3u8',
        type: 'hls',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4pAdSyRyRjmjBIe9xQUqITehtWmJ0KFKP1Q&usqp=CAU'  // <-- Fixed closing quote

         }, 
alJazeera: {
    name: "AL JAZEERA",
    url: "https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8",
    type: "m3u8",
    logo: "https://1000logos.net/wp-content/uploads/2023/01/Al-Jazeera-Logo.png"
},

bbcNews: {
    name: "BBC NEWS",
    url: "https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/ASuVFay.png"
},

blooberg: {
    name: "BLOOMBERG",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd",
    keyId: "ef7d9dcfb99b406cb79fb9f675cba426",
    key: "b24094f6ca136af25600e44df5987af4",
    type: "mpd",
    logo: "https://i.imgur.com/pl4w2NN.png"
},

cna: {
    name: "CNA",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd",
    keyId: "b259df9987364dd3b778aa5d42cb9acd",
    key: "753e3dba96ab467e468269e7e33fb813",
    type: "mpd",
    logo: "https://i.imgur.com/NWP3n1k.png"
},

cnbc: {
    name: "CNBC",
    url: 'http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/cnbcasia.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/foW8GA2.png"
},

cnn: {
    name: "CNN",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
    keyId: "900c43f0e02742dd854148b7a75abbec",
    key: "da315cca7f2902b4de23199718ed7e90",
    type: "mpd",
    logo: "https://i.imgur.com/UYpxXca.png"
},

cgtn: {
    name: "CGTN",
    url: "https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8",
    type: "m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/CGTN.svg/512px-CGTN.svg.png"
},

deutscheWelle: {
    name: "DEUTSCHE WELLE",
    url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/UtR5MHV.png"
},

euronews: {
    name: "EURONEWS",
    url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/euronews.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/3262tTo.png"
},

foxNewsLiveNow: {
    name: "FOX NEWS LIVENOW",
    url: "https://fox-foxnewsnow-vizio.amagi.tv/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/gDo64KN.png"
},

france24: {
    name: "FRANCE 24",
    url: "https://live.france24.com/hls/live/2037218/F24_EN_HI_HLS/master_5000.m3u8",
    type: "m3u8",
    logo: "https://static.epg.best/fr/France24English.fr.png"
},

iqiyi: {
    name: "IQIYI",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/1006/default_primary.mpd",
    keyId: "7ef7e913ce85a1131b27036069169a10",
    key: "77d98ed71db7524c27875a09a975f9e6",
    type: "mpd",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Iqiyi_Logo_Baru.png"
},

russiaToday: {
    name: "RUSSIA TODAY",
    url: "https://1a-1791.com/live/hr6yv36f/slot-4/mxtm-wdfe_360p/chunklist_DVR.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/SE4ZoBV.png"
},

skyNews: {
    name: "SKY NEWS",
    url: "https://1a-1791.com/live/hr6yv36f/slot-4/mxtm-wdfe_360p/chunklist_DVR.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/8p0dh0V.png"
},

wion: {
    name: "WION",
    url: "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index.m3u8",
    type: "m3u8",
    logo: "https://static.epg.best/in/WION.in.png"
},

wwi: {
    name: "WWE",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2603/default_primary.mpd",
    keyId: "6093e12639b24cd651ee6b3c13446d10",
    key: "f8326f668c7bee309e5302b513e5bdf7",
    type: "mpd",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png"
},
magillan: {
        name: 'MAGELLAN TV NOW',
        url: 'https://d38zwu2qgo0ado.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-ud4yxs1nuiyc5/Magellan_TV_Now_CA.m3u8?ads.device_did=%7BPSID',
        type: 'hls',
        logo: 'https://image-resizer-cloud-cdn.api.cms.amdvids.com/image/0D984558-B866-4F2E-A424-3CEE79AC0A67/3-1x1.png/900'
         }, 
tfc: {
    name: 'TFC',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/index.mpd',
        keyId: '9568cc84e1d944f38eac304517eab6fd',
        key: 'f12142af8f39b3bab79d3679d3665ebe',
		type: 'mpd',
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzLP719UQvns3bInfVVguXm-gnnE9kDIFgQGhConviR-QquOC0T4Bc0Fa&s=10'
	 },  
	 axn: {
    name: "AXN-indihme",
    url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/axn.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/tDbuoAU.png"
},

cinem: {
    name: "CINEMAX",
    url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd",
    keyId: "b207c44332844523a3a3b0469e5652d7",
    key: "fe71aea346db08f8c6fbf0592209f955",
    type: "mpd",
    logo: "https://i.imgur.com/YomkvVa.png"
},

hbo: {
    name: "HBO",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
    keyId: "d47ebabf7a21430b83a8c4b82d9ef6b1",
    key: "54c213b2b5f885f1e0290ee4131d425b",
    type: "mpd",
    logo: "https://i.imgur.com/fHBIgs6.png"
},

hboFamily: {
    name: "HBO FAMILY",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd",
    keyId: "872910c843294319800d85f9a0940607",
    key: "f79fd895b79c590708cf5e8b5c6263be",
    type: "mpd",
    logo: "https://i.imgur.com/Zy3pvJV.png"
},

hbo: {
    name: "HBO HITS",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd",
    keyId: "b04ae8017b5b4601a5a0c9060f6d5b7d",
    key: "a8795f3bdb8a4778b7e888ee484cc7a1",
    type: "mpd",
    logo: "https://i.imgur.com/pZn9JHj.png"
},

hboSignature: {
    name: "HBO SIGNATURE",
    url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd",
    keyId: "a06ca6c275744151895762e0346380f5",
    key: "559da1b63eec77b5a942018f14d3f56f",
    type: "mpd",
    logo: "https://i.imgur.com/3BOoqQn.png"
},

kix: {
    name: "KIX",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",
    keyId: "a8d5712967cd495ca80fdc425bc61d6b",
    key: "f248c29525ed4c40cc39baeee9634735",
    type: "mpd",
    logo: "https://i.imgur.com/XDQMCio.png"
},

rockAction: {
    name: "ROCK ACTION",
    url: "https://streaming.indihometv.com/atm/hlsv3/ROCK_ACTION/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/Sum9qPu.png"
},

rockEntertainment: {
    name: "ROCK ENTERTAINMENT",
    url: "https://streaming.indihometv.com/atm/hlsv3/rock_entertainment/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/Oh9rzNa.png"
},

thril: {
    name: "THRILL",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd",
    keyId: "928114ffb2394d14b5585258f70ed183",
    key: "a82edc340bc73447bac16cdfed0a4c62",
    type: "mpd",
    logo: "https://i.imgur.com/LCX2guc.png"
}, 
amc: {
    name: "AMC",
    url: "https://ott.zapitv.com/live/eds_c2/amc_hd/dash_live_enc/amc_hd.mpd",
    keyId: "ffec3dec40cb61a45e969c84977615ef",
    key: "c6fbbe1e506a4323d3046b30731c9d52",
    type: "mpd",
    logo: "https://i.imgur.com/PQGEkPM.png"
},
axn_movies: {
    name: "AXN MOVIES",
    url: "https://ott.zapitv.com/live/eds_c2/axn_white/dash_live_enc/axn_white.mpd",
    keyId: "f9e4be09926c262effa2b5381ae3553d",
    key: "d630e04e0c5e3f98dc38840be1c1dd4c",
    type: "mpd",
    logo: "https://i.imgur.com/UJUT6j5.png"
},
calle_13: {
    name: "CALLE 13",
    url: "https://ott.zapitv.com/live/eds_c2/calle_13/dash_live_enc/calle_13.mpd",
    keyId: "6ae50bb56203f2f3875e3ee78efab1a5",
    key: "f22429107ea7806f54902bb2926c8872",
    type: "mpd",
    logo: "https://i.imgur.com/0uNnwpU.png"
},
comedy_central: {
    name: "COMEDY CENTRAL",
    url: "https://ott.zapitv.com/live/eds_c2/comedy_central/dash_live_enc/comedy_central.mpd",
    keyId: "f8757de5a495ce5db4893c2eefc11e58",
    key: "d8309cd9fa8c286f277b4cb9841d7bd2",
    type: "mpd",
    logo: "https://i.imgur.com/32XV9vn.png"
},
hits: {
    name: "HITS",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd",
    keyId: "dac605bc197e442c93f4f08595a95100",
    key: "975e27ffc1b7949721ee3ccb4b7fd3e5",
    type: "mpd",
    logo: "https://i.imgur.com/YeqyD9W.png"
},
hits_movies: {
    name: "HITS MOVIES-indihome",
    url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/hitsmovie.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/1rG3el2.png"
},
hitsow: {
    name: "HITS NOW-indihome",
    url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/hitsnow.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/S3pNx8Gl.png"
},
paramount_network: {
    name: "PARAMOUNT NETWORK",
    url: "https://fl2.moveonjoy.com/PARAMOUNT_NETWORK/index.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/fxwLZXp.png"
},
studio_universal: {
    name: "STUDIO UNIVERSAL",
    url: "https://streaming.indihometv.com/joss/130/studiouniversal/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/Qx7X56p.png"
},
syfy: {
    name: "SYFY",
    url: "https://ott.zapitv.com/live/eds_c2/syfy/dash_live_enc/syfy.mpd",
    keyId: "95ec1e26e80c38258a30101d06c8cbf7",
    key: "0d0df5189256c0bf32c0cd0976bac5bd",
    type: "mpd",
    logo: "https://i.imgur.com/h8c0Qug.png"
},
usa_network: {
    name: "USA NETWORK",
    url: "https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-east)/master.mpd",
    keyId: "78ab64fa90f137a697743b5dc27b2f96",
    key: "de4d31c7fc6005ede28abab2a0720a9f",
    type: "mpd",
    logo: "https://i.imgur.com/8zxXx5v.png"
},
warner_tv: {
    name: "WARNER TV",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
    keyId: "4503cf86bca3494ab95a77ed913619a0",
    key: "afc9c8f627fb3fb255dee8e3b0fe1d71",
    type: "mpd",
    logo: "https://i.imgur.com/Hy26eiy.png"
},
cinemaworld: {
    name: "CINEMAWORLD-indihome",
    url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/cinemaworld.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/GoC9AZ2.png"
},
dark: {
    name: "DARK",
    url: "https://ott.zapitv.com/live/eds_c2/DARK_HD/dash_live_enc/DARK_HD.mpd",
    keyId: "ee3899fcba09e6de20355394106ca745",
    key: "d84b6489ff8e5aeecde84a659c0617b8",
    type: "mpd",
    logo: "https://i.imgur.com/bdLVFSx.png"
},
hollywood: {
    name: "HOLLYWOOD",
    url: "https://ott.zapitv.com/live/eds_c2/hollywood_hd/dash_live_enc/hollywood_hd.mpd",
    keyId: "38b0a87ba1614db52f1520191282a0db",
    key: "af101261419cdcf7c09b82592eac862a",
    type: "mpd",
    logo: "https://i.imgur.com/q7xVRtE.png"
},
mbc_action: {
    name: "MBC ACTION",
    url: "https://uselector.cdn.intigral-ott.net/MBAH/MBAH.isml/manifest.mpd",
    keyId: "5567531458e9c2e93d22935c45fdef52",
    key: "f2f613fb2132acd019d2a96bf1be15c1",
    type: "mpd",
    logo: "https://i.imgur.com/Ju4pzmh.png"
},
mbc_max: {
    name: "MBC MAX",
    url: "https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd",
    keyId: "0a414b719bade2acc124e22c042290f3",
    key: "db84a5afa10a001dd73b094c14638212",
    type: "mpd",
    logo: "https://i.imgur.com/fNASKSl.png"
},
sundance_tv: {
    name: "SUNDANCE TV",
    url: "https://ott.zapitv.com/live/eds_c2/sundance_hd/dash_live_enc/sundance_hd.mpd",
    keyId: "7107df0ecf168438df3d5e35a06f5e8b",
    key: "1541c20a7dc82b302ec9b97274910162",
    type: "mpd",
    logo: "https://i.imgur.com/dfTesaD.png"
},
turner_classic_movies: {
    name: "TURNER CLASSIC MOVIES",
    url: "https://uselector.cdn.intigral-ott.net/TCM/TCM.isml/manifest.mpd",
    keyId: "59c626d2eae3ad531022136f1bb4769e",
    key: "5c83465dc798bab650d802725cc26270",
    type: "mpd",
    logo: "https://i.imgur.com/KuQMnuf.png"
},
xtrm: {
    name: "XTRM",
    url: "https://ott.zapitv.com/live/eds_c2/xtrm_hd/dash_live_enc/xtrm_hd.mpd",
    keyId: "563e6e1367e0c8c0f6643cf0ae92c4e7",
    key: "7a84ece91b690c5b717eeffd58a55b04",
    type: "mpd",
    logo: "https://tvprofil.com/img/kanali-logo/XTRM_ES_logo_v2.png"
},
animax: {
    name: "ANIMAX",
    url: "https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd",
    keyId: "edf1a715de9748638dd2fad75a419af2",
    key: "2f5a3199b26e9b693ae881af7ff864cf",
    type: "mpd",
    logo: "https://i.imgur.com/QxTehhs.png"
},
anime_x_hidive: {
    name: "ANIME X HIDIVE",
    url: "https://amc-anime-x-hidive-1-us.tablo.wurl.tv/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/E1LIeR2.png"
},
kpop_tv_play: {
    name: "KPOP TV PLAY",
    url: "https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/chunks.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/Tf0vweF.png"
},
lotus_macau: {
    name: "LOTUS MACAU",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd",
    keyId: "60dc692e64ea443a8fb5ac186c865a9b",
    key: "01bdbe22d59b2a4504b53adc2f606cc1",
    type: "mpd",
    logo: "https://i.imgur.com/SNc90AX.png"
},
mtv: {
    name: "MTV",
    url: "https://ott.zapitv.com/live/eds_c2/mtv_espana/dash_live_enc/mtv_espana.mpd",
    keyId: "10f86eedfa603133e035c4c64226dd6b",
    key: "1678761258b8a16d5d5b9241bd647536",
    type: "mpd",
    logo: "https://i.imgur.com/tb65CMh.png"
},
mtv_hits: {
    name: "MTV HITS",
    url: "https://ott.zapitv.com/live/eds_c2/mtv_hits/dash_live_enc/mtv_hits.mpd",
    keyId: "f2975a79fd099430a195212b04b4dd1e",
    key: "7f8f21c0b12be72690510d92b893b5ac",
    type: "mpd",
    logo: "https://i.imgur.com/z0uTcNt.png"
},
mtv_live: {
    name: "MTV LIVE",
    url: "https://tr.live.cdn.cgates.lt/live/dash/560701/index.mpd",
    keyId: "1041d72f861c4e60a87a4e828250ded6",
    key: "c75b1640bc83ec0c653902a775e5bb1a",
    type: "mpd",
    logo: "https://i.imgur.com/6pAXZUA.png"
},
trace_urban: {
    name: "TRACE URBAN",
    url: "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-traceurban-samsungnz/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/VRazo4V.png"
},
trace_uk: {
    name: "TRACE UK",
    url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/trace-uk/6655b878-f320-467c-b91d-153baf27a101/1.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/inKLYI5.png"
},
tvn: {
    name: "TVN",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd",
    keyId: "e1bde543e8a140b38d3f84ace746553e",
    key: "b712c4ec307300043333a6899a402c10",
    type: "mpd",
    logo: "https://i.imgur.com/lY1BAUH.png"
},
tvn_movies: {
    name: "TVN MOVIES",
    url: "https://streaming.indihometv.com/joss/133/tvnmovies/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/oLzTyUX.png"
},
abc_ausralia: {
    name: "ABC AUSTRALIA",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
    keyId: "389497f9f8584a57b234e27e430e04b7",
    key: "3b85594c7f88604adf004e45c03511c0",
    type: "mpd",
    logo: "https://i.imgur.com/qQ33TVM.png"
},
animalanet: {
    name: "ANIMAL PLANET",
    url: "https://hide.skygoplus.workers.dev/segments/live/disk1/animal-planet/HLSv3-FTA/animal-planet-avc1_2089200=38-mp4a_256000_eng=39.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/RXMzzlB.png"
},
ariran: {
    name: "ARIRANG",
    url: "https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/jgiNWxJ.png"
},
cct4: {
    name: "CCTV4",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
    keyId: "b83566836c0d4216b7107bd7b8399366",
    key: "32d50635bfd05fbf8189a0e3f6c8db09",
    type: "mpd",
    logo: "https://i.imgur.com/h9vqWzN.png"
},
cgtn_documentary: {
    name: "CGTN DOCUMENTARY",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd",
    keyId: "0f854ee4412b11edb8780242ac120002",
    key: "9f2c82a74e727deadbda389e18798d55",
    type: "mpd",
    logo: "https://i.imgur.com/m20XaAQ.png"
},
discovery_channel: {
    name: "DISCOVERY CHANNEL",
    url: "https://hide.skygoplus.workers.dev/segments/live/disk1/discovery-channel/HLSv3-FTA/discovery-channel-avc1_2089200=116-mp4a_256000_eng=117.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/xk1u2TS.png"
},
discovery_science: {
    name: "DISCOVERY SCIENCE",
    url: "https://hide.skygoplus.workers.dev/segments/live/disk1/discovery-science/HLSv3-FTA/discovery-science-avc1_2089200=132-mp4a_256000_eng=131.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/FrH7wGO.png"
},
kbswrld: {
    name: "KBS WORLD",
    url: "https://kbsworld-ott.akamaized.net/hls/live/2002341/kbsworld/master.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/JAL3Ohz.png"
},
nhk_world: {
    name: "NHK WORLD",
    url: "https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8",
    type: "m3u8",
    logo: "https://i.imgur.com/WX0fL1C.png"
},

tv5_monde: {
    name: "TV5 MONDE",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd",
    keyId: "fba5a720b4a541b286552899ba86e38b",
    key: "f63fa50423148bfcbaa58c91dfcffd0e",
    type: "mpd",
    logo: "https://i.imgur.com/W4o8wtt.png"
},
    asianfoodnwork: {
        name: "ASIAN FOOD NETWORK",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd",
        keyId: "1619db30b9ed42019abb760a0a3b5e7f",
        key: "5921e47fb290ae263291b851c0b4b6e4",
        type: "mpd",
        logo: "https://i.imgur.com/O5jBcL2.png"
    },
    crimeinvestigation: {
        name: "CRIME + INVESTIGATION-indihome",
        url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/crimeinvestigation.m3u8",
        type: "m3u8",
        logo: "https://i.imgur.com/KeM5KlR.png"
    },
    discoveryasia: {
        name: "DISCOVERY ASIA",
        url: "https://cdn3.skygo.mn/live/disk1/Discovery_Asia/HLS-FTA/Discovery_Asia.m3u8",
        type: "m3u8",
        logo: "https://i.imgur.com/kftMPcc.png"
    },
    discoveryfamily: {
        name: "DISCOVERY FAMILY",
        url: "https://uselector.cdn.intigral-ott.net/DCF/DCF.isml/manifest.mpd",
        keyId: "bce56c8de2f1b27b16dd7d3abc2409b6",
        key: "8c1c393bb61be740910438f6e49c7c32a",
        type: "mpd",
        logo: "https://i.imgur.com/IG2mw0o.png"
    },
    foodnetwork: {
        name: "FOOD NETWORK",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd",
        keyId: "b7299ea0af8945479cd2f287ee7d530e",
        key: "b8ae7679cf18e7261303313b18ba7a14",
        type: "mpd",
        logo: "https://i.imgur.com/DvXfCrO.png"
    },
    globaltrekker: {
        name: "GLOBAL TREKKER",
        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd",
        keyId: "4553f7e8011f411fb625cefc39274300",
        key: "98f2f1d153367e84b5d559dc9dfb9a35",
        type: "mpd",
        logo: "https://i.imgur.com/8VsCN1h.png"
    },
   hgtv: {
        name: "HGTV",
        url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd",
        keyId: "f0e3ab943318471abc8b47027f384f5a",
        key: "13802a79b19cc3485d2257165a7ef62a",
        type: "mpd",
        logo: "https://i.imgur.com/FGgFyoi.png"
    },
    investigationdiscovery: {
        name: "INVESTIGATION DISCOVERY",
        url: "https://uselector.cdn.intigral-ott.net/DCX/DCX.isml/manifest.mpd",
        keyId: "2e364252e8341f5b172da9aa813947e7",
        key: "674099ec66ddecbc55a244ce06228188",
        type: "mpd",
        logo: "https://i.imgur.com/i9KwZND.png"
    },
    lovenature: {
        name: "LOVE NATURE-indihome",
        url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/lovenature.m3u8",
        type: "m3u8",
        logo: "https://i.imgur.com/KuFIhai.png"
    },
    nationalgeographic: {
        name: "NATIONAL GEOGRAPHIC",
        url: "https://uselector.cdn.intigral-ott.net/NGO/NGO.isml/manifest.mpd",
        keyId: "1ba94b93b39ab809b587237d7b60a049",
        key: "e0f94dbfbf9e6e45c9567a7b50eb612c",
        type: "mpd",
        logo: "https://i.imgur.com/2TeKCBK.png"
    },
    nationalgeographicwild: {
        name: "NATIONAL GEOGRAPHIC WILD",
        url: "https://uselector.cdn.intigral-ott.net/NHD/NHD.isml/manifest.mpd",
        keyId: "276e56bc14095f327bbf0c936eb7b38c",
        key: "63127eaddb18c596db05657424849519",
        type: "mpd",
        logo: "https://i.imgur.com/ZfWiVTe.png"
    },
    tcl: {
        name: "TLC-indihome",
        url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/tlc.m3u8",
        type: "m3u8",
        logo: "https://i.imgur.com/bU6a84F.png"
    },
    travelchannel: {
        name: "TRAVEL CHANNEL",
        url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
        keyId: "f3047fc13d454dacb6db4207ee79d3d3",
        key: "bdbd38748f51fc26932e96c9a2020839",
        type: "mpd",
        logo: "https://i.imgur.com/LplHeem.png"
    },
   
    amcbrea: {
        name: "AMC BREAK",
        url: "https://ott.zapitv.com/live/eds_c2/blaze/dash_live_enc/blaze.mpd",
        keyId: "15e412a4edd85313233969913072e0ff",
        key: "5098eafaff2b246ee15e8f9aeb5403fb",
        type: "mpd",
        logo: "https://i.imgur.com/GmrUIHd.png"
    },
    amccrim: {
        name: "AMC CRIME",
        url: "https://ott.zapitv.com/live/eds_c2/crimen/dash_live_enc/crimen.mpd",
        keyId: "e3048d6cc539b8a8b90d74992fb4e197",
        key: "4e494e4d179abc3d3f10073b21ac8630",
        type: "mpd",
        logo: "https://i.imgur.com/4j0xoNI.png"
    },
   bbceart: {
        name: "BBC EARTH",
        url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",
        keyId: "34ce95b60c424e169619816c5181aded",
        key: "0e2a2117d705613542618f58bf26fc8e",
        type: "mpd",
        logo: "https://i.imgur.com/GV3GAln.png"
    },
    bbclfestyle: {
        name: "BBC LIFESTYLE",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd",
        keyId: "34880f56627c11ee8c990242ac120002",
        key: "c23677c829bb244b79a3dc09ffd88ca0",
        type: "mpd",
        logo: "https://i.imgur.com/ipKlaA4.png"
    },
    cartoonnetwor: {
        name: "CARTOON NETWORK",
        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd",
        keyId: "a2d1f552ff9541558b3296b5a932136b",
        key: "cdd48fa884dc0c3a3f85aeebca13d444",
        type: "mpd",
        logo: "https://i.imgur.com/Offhcm1.png"
    },
    curiositychanne: {
        name: "CURIOSITY CHANNEL-indihome",
        url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/curiosity.m3u8",
        type: "m3u8",
        logo: "https://i.imgur.com/VqTXs9t.png"
    },
    disey: {
        name: "DISNEY",
        url: "https://uselector.cdn.intigral-ott.net/DIS/DIS.isml/manifest.mpd",
        keyId: "72800c62fcf2bfbedd9af27d79ed35d6",
        key: "b6ccb9facb2c1c81ebe4dfaab8a45195",
        type: "mpd",
        logo: "https://i.imgur.com/gAMh5Ls.png"
    },
    disneyj: {
        name: "DISNEY JR.",
        url: "https://uselector.cdn.intigral-ott.net/DJR/DJR.isml/manifest.mpd",
        keyId: "f5df57914a0922d5d5ed6b0a4af6290a",
        key: "c62b10a180d1770a355b3c4cb6506ca0",
        type: "mpd",
        logo: "https://i.imgur.com/rLROXxu.png"
    },
    disneyx: {
        name: "DISNEY XD",
        url: "https://fl5.moveonjoy.com/DISNEY_XD/index.m3u8",
        type: "m3u8",
        logo: "https://i.imgur.com/Bccu95o.png"
    },
    histry: {
        name: "HISTORY",
        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
        keyId: "a7724b7ca2604c33bb2e963a0319968a",
        key: "6f97e3e2eb2bade626e0281ec01d3675",
        type: "mpd",
        logo: "https://i.imgur.com/z9fsJ2L.png"
    },
    lifetim: {
        name: "LIFETIME-indihome",
        url: "http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/lifetime.m3u8",
        type: "m3u8",
        logo: "https://i.imgur.com/LIrEjuN.png"
    },
    outdoorcannel: {
        name: "OUTDOOR CHANNEL",
        url: "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8",
        type: "m3u8",
        logo: "https://cms.cignal.tv/Upload/Images/Outdoor-Channel.png"
    },

   nbatv: {
        name: 'NBA TV INDIHOME',
        url: 'http://iptvid.my.id/avc/zdYwXLGjtNWsnDgSfgYmSlBCvPMO13kK/ztfsQn5V6MQUNR9NYB9gKdzahqiXrxXM/nba.m3u8',
        type: 'hls',
         },

	depedchannel: {
    name: 'DEP ED CHANNEL',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
        keyId: '0f853706412b11edb8780242ac120002',
        key: '2157d6529d80a760f60a8b5350dbc4df',
		type: 'mpd',
    },
	
	
	channelnews_asia: {
    name: 'CHANNEL NEWS ASIA',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
        keyId: 'b259df9987364dd3b778aa5d42cb9acd',
        key: '753e3dba96ab467e468269e7e33fb813',
		type: 'mpd',
    },
	
	SMNI: {
        name: 'SMNI',
        url: 'https://1a-1791.com/live/za4hy30t/slot-139/uiik-j0b1_1080p/chunklist_DVR.m3u8',
        type: 'hls',
         },  
         WWE: {
        name: 'WWE',
        url: 'https://akam.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc106wh3yw)/master.mpd',
        keyId: '00208c93f4358213b52220898b962385',
        key: '8ae6063167228e350dd132d4a1573102',
		type: 'mpd',
    }, 
        fightsport: {
        name: 'FIGHT SPORTS',
        url: 'https://cdn09jtedge.indihometv.com/joss/133/fightsport/index.m3u8',
        type: 'hls',
         },   
	redbull: {
        name: 'REDBULL TV',
        url: 'https://db38umy8gexon.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-f561zwy85csh9/playlist.m3u8?ads.device_did=%7BPSID%7D&ads.device_dnt=%7BTAR',
        type: 'hls',
         },
	  BOXINGTV: {
        name: 'BOXING TV',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/boxing-tv/BOXINGTV_SCTE.m3u8',
        type: 'hls',
         },
	
	  pba_rush_hd: {
        name: 'PBA RUSH',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82',
		type: 'mpd',
    }, 
     wwe: {
        name: 'PBS KIDS',
        url: 'https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live2/gsn_720p/playlist.m3u8',
        type: 'hls',
         },
	
	AMC: {
        name: 'AMC+',
        url: 'https://bcovlive-a.akamaihd.net/ba853de442c140b7b3dc020001597c0a/us-east-1/6245817279001/profile_0/chunklist.m3u8',
        type: 'hls',
         },  
  
    Animax: {
        name: 'ANIMAX',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd',
        keyId: '92032b0e41a543fb9830751273b8debd',
        key: '03f8b65e2af785b10d6634735dbe6c11',
		type: 'mpd',
    },
    nickelodeon: {
        name: 'NICKELODEON',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd',
   
    },

    arirang: {
        name: 'ARIRANG',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
        keyId: '13815d0fa026441ea7662b0c9de00bcf',
        key: '2d99a55743677c3879a068dd9c92f824',
		type: 'mpd',
    },
    premiersports_hd: {
        name: 'PREMIER SPORTS',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
        keyId: 'fc19c98cb9504a0fb78b22fea0a4b814',
        key: 'ea683112a96d4ae6c32d4ea13923e8c7',
		type: 'mpd',
    },
    premier_tennishd: {
        name: 'PREMIER TENNIS',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
        keyId: '59454adb530b4e0784eae62735f9d850',
        key: '61100d0b8c4dd13e4eb8b4851ba192cc',
		type: 'mpd',
    },
    tapactionflix_hd: {
        name: 'TAP ACTION FLIX',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        keyId: 'bee1066160c0424696d9bf99ca0645e3',
        key: 'f5b72bf3b89b9848de5616f37de040b7',
	    type: 'mpd',
    },
   
	hits_now: {
        name: 'HITS NOW',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
        keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
        key: '92b0287c7042f271b266cc11ab7541f1',
		type: 'mpd',
    },

        kmovies: {
        name: 'K-MOVIES',
        url: 'https://7732c5436342497882363a8cd14ceff4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Plex_NewMovies/playlist.m3u8',
        type: 'hls',
    },
	

	tvn_plus: {
    name: 'TVN',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        keyId: 'e1bde543e8a140b38d3f84ace746553e',
        key: 'b712c4ec307300043333a6899a402c10',
		type: 'mpd',
    },
	popup_ppv_hd: {
    name: 'POPUP PPV HD',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd',
        keyId: '286e1c2d622c4c73b5c3d72e4a848abd',
        key: 'b7fad67599c1ce3c2fbc9d02b901be05',
		type: 'mpd',
    },
	dreamworks_hd: {
    name: 'DREAMWORKS HD',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        keyId: '4ab9645a2a0a47edbd65e8479c2b9669',
        key: '8cb209f1828431ce9b50b593d1f44079',
		type: 'mpd',
    },
	tap_edge: {
    name: 'TAP EDGE',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd',
        keyId: '0f854034412b11edb8780242ac120002',
        key: 'af8ad1c5e3f2e1b751a4f64608f24275',
		type: 'mpd',
    },
	tap_sports: {
    name: 'TAP SPORTS',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',
        key: '0e7e35a07e2c12822316c0dc4873903f',
		type: 'mpd',
    },
	one_sports_plus_hd: {
    name: 'ONE SPORTS PLUS HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        keyId: '322d06e9326f4753a7ec0908030c13d8',
        key: '1e3e0ca32d421fbfec86feced0efefda',
		type: 'mpd',
    },
	cctv4: {
    name: 'CCTV4',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        keyId: '0f8541ec412b11edb8780242ac120002',
        key: '6cf16c272b7357c48cd47061799a4963',
		type: 'mpd',
    },
	lifetime: {
    name: 'LIFETIME',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
        keyId: 'cf861d26e7834166807c324d57df5119',
        key: '64a81e30f6e5b7547e3516bbf8c647d0',
		type: 'mpd',
    },
	hgtv_hd: {
    name: 'HGTV HD',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
        keyId: 'f0e3ab943318471abc8b47027f384f5a',
        key: '13802a79b19cc3485d2257165a7ef62a',
		type: 'mpd',
    },
	aljazeera: {
    name: 'Al JAZEERA ',
        url: 'https://live-hls-web-aje.getaj.net/AJE/index.m3u8',
        type: 'hls',
    },
	foodnetwork_hd: {
    name: 'FOOD NETWORK HD',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        keyId: 'b7299ea0af8945479cd2f287ee7d530e',
        key: 'b8ae7679cf18e7261303313b18ba7a14',
		type: 'mpd',
    },
	history_hd: {
    name: 'HISTORY HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        keyId: 'a7724b7ca2604c33bb2e963a0319968a',
        key: '6f97e3e2eb2bade626e0281ec01d3675',
		type: 'mpd',
    },
	fashiontv_hd: {
    name: 'FASHION TV HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        keyId: '971ebbe2d887476398e97c37e0c5c591',
        key: '472aa631b1e671070a4bf198f43da0c7',
		type: 'mpd',
    },
	bloomberg: {
    name: 'BLOOMBERG',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
        keyId: 'ef7d9dcfb99b406cb79fb9f675cba426',
        key: 'b24094f6ca136af25600e44df5987af4',
		type: 'mpd',
    },

	SPOTV_HD: {
    name: 'SPOTV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
        key: '9c0e4191203fccb0fde34ee29999129e',
		type: 'mpd',
    },
	SPOTV_HD2: {
    name: 'SPOTV2',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        keyId: '7eea72d6075245a99ee3255603d58853',
        key: '6848ef60575579bf4d415db1032153ed',
		type: 'mpd',
    },
	animal_planet: {
    name: 'ANIMAL PLANET',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
        keyId: '436b69f987924fcbbc06d40a69c2799a',
        key: 'c63d5b0d7e52335b61aeba4f6537d54d',
		type: 'mpd',
    },
	abc_australia: {
    name: 'ABC AUSTRALIA',
        url: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        keyId: '389497f9f8584a57b234e27e430e04b7',
        key: '3b85594c7f88604adf004e45c03511c0',
		type: 'mpd',
    },
	bbcearth_hd: {
    name: 'BBC EARTH',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        keyId: '34ce95b60c424e169619816c5181aded',
        key: '0e2a2117d705613542618f58bf26fc8e',
		type: 'mpd',
    },
	bbcworld_news: {
    name: 'BBCWORLD NEWS',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
        keyId: 'f59650be475e4c34a844d4e2062f71f3',
        key: '119639e849ddee96c4cec2f2b6b09b40',
		type: 'mpd',
    },
	travel_channel: {
    name: 'TRAVEL CHANNEL',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        keyId: 'f3047fc13d454dacb6db4207ee79d3d3',
        key: 'bdbd38748f51fc26932e96c9a2020839',
		type: 'mpd',
    },
	asianfoodnetwork: {
    name: 'ASIAN FOOD NETWORK',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        keyId: '1619db30b9ed42019abb760a0a3b5e7f',
        key: '5921e47fb290ae263291b851c0b4b6e4',
		type: 'mpd',
    },
	taptv: {
    name: 'TAP TV',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        keyId: 'f6804251e90b4966889b7df94fdc621e',
        key: '55c3c014f2bd12d6bd62349658f24566',
		type: 'mpd',
    },
	crime_investigation: {
    name: 'CRIME INVESTIGATION',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd',
        keyId: '21e2843b561c4248b8ea487986a16d33',
        key: 'db6bb638ccdfc1ad1a3e98d728486801',
		type: 'mpd',
    },
	tech_storm: {
    name: 'TECH STORM',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd',
        keyId: '5675d85ce6754ba6aa8f6acc4660f76f',
        key: '140bfb365cf143c349f68699238a610c',
		type: 'mpd',
    },
	kix_hd: {
    name: 'KIX HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd',
    },
DISNEYXD: {
        name: 'DISNEY XD',
        url: 'https://fl5.moveonjoy.com/DISNEY_XD/tracks-v1a1/mono.m3u8',
        type: 'hls',
         },
cartoon_net_hd: {
    name: 'CARTOON NETWORK HD',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
        keyId: 'a2d1f552ff9541558b3296b5a932136b',
        key: 'cdd48fa884dc0c3a3f85aeebca13d444',
		type: 'mpd',
    },
	nickjr: {
    name: 'NICKJR',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
        keyId: 'bab5c11178b646749fbae87962bf5113',
        key: '0ac679aad3b9d619ac39ad634ec76bc8',
		type: 'mpd',
    },
	nickelodeon: {
    name: 'NICKELODEON',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd',
    },
	blueant_extreme: {
    name: 'ROCK ACTION',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
        keyId: '0f852fb8412b11edb8780242ac120002',
        key: '4cbc004d8c444f9f996db42059ce8178',
		type: 'mpd',
    },
	rock_entertainment: {
    name: 'ROCK ENTERTAINMENT',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
        keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7',
        key: 'be2a096403346bc1d0bb0f812822bb62',
		type: 'mpd',
    },
	discovery: {
    name: 'DISCOVERY ',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd',
        keyId: 'd9ac48f5131641a789328257e778ad3a',
        key: 'b6e67c37239901980c6e37e0607ceee6',
		type: 'mpd',
    },
	kix_hd: {
    name: 'KIX HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd',
    },
	kbs_world: {
    name: 'KBS WORLD',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd',
        keyId: '22ff2347107e4871aa423bea9c2bd363',
        key: 'c6e7ba2f48b3a3b8269e8bc360e60404',
		type: 'mpd',
    },
    AXN: {
        name: 'AXN',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
        keyId: 'fd5d928f5d974ca4983f6e9295dfe410',
        key: '3aaa001ddc142fedbb9d5557be43792f',
		type: 'mpd',
         },	
cathtv: {
        name: 'CATHOLIC TV',
        url: 'https://catholictvhd-lh.akamaized.net/hls/live/2043390/CTVLiveHD/master_5.m3u8',
        type: 'hls',
         },
fishtv: {
         name: 'FISH TV',
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/wired2fish/683467f1-75cf-4283-bb17-a93551008871/0.m3u8',
        type: 'hls',
         },
LN: {
        name: 'LOVE NATURE',
        url: 'https://cdn09jtedge.indihometv.com/joss/194/lovenature/index.m3u8',
        type: 'hls',
         }, 
GALAXYtv: {
        name: 'GALAXY TV TV',
        url: 'https://cdn09jtedge.indihometv.com/joss/133/galaxy/index.m3u8',
        type: 'hls',
         },
GALXYtv: {
        name: 'GALAXY TV PREMIUM',
        url: 'https://cdn09jtedge.indihometv.com/joss/133/galaxypremium/index.m3u8',
        type: 'hls',
         }, 
ESPN: {
        name: 'ESPN NEWS',
        url: 'https://fl5.moveonjoy.com/ESPN_2/tracks-v1a1/mono.m3u8',
        type: 'hls',
         }, 
ESPNU: {
        name: 'ESPN U',
        url: 'https://fl5.moveonjoy.com/ESPN_U/tracks-v1a1/mono.m3u8',
        type: 'hls',
         }, 
NATGEO: {
        name: 'NAT GEO',
        url: 'https://fl5.moveonjoy.com/National_Geographic/tracks-v1a1/mono.m3u8',
        type: 'hls',

}
};

