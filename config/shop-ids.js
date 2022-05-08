const MarketPlace = require("../config/market");

const productsMap = {
    Nestogen: {
        2: {
            600: {
                [MarketPlace.DetskiyMir]: ['3277743'],
                [MarketPlace.EDostavka]: ['item_980749.html'],
                [MarketPlace.Wildberries]: ['70916384'],
                [MarketPlace.Ostrov]: ['produkty-pitaniya/detskoe-pitanie/smesi-kashi-detskie/smes-nestogen-2-dlya-regulyarnogo-myagkogo-stula-s-6-mesyatsev-600-g/'],
                [MarketPlace.Gippo]: ['detskie-tovary-igrushki-isg221/detskoe-pitanie-isg349/smesi-isg190/smes-sukhaya-molochnaya-posled-adaptirov-moment-prigot-nestogen-2-s-omega-3-pnzhk-i-laktobakt-ves-2--4600680012162/'],
                [MarketPlace.Green]: ['20788609'],
                [MarketPlace.Buslik]: ['pitanie_i_kormlenie/molochnye_smesi/smesi_dlya_detey_do_goda/nestogen_2_smes_dlya_regulyarnogo_myagkogo_stula_s_6_mesyatsev_600_g/'],
            },
            300: {
                [MarketPlace.DetskiyMir]: ['3277742'],
                [MarketPlace.EDostavka]: ['item_980745.html'],
                [MarketPlace.Wildberries]: ['70916336'],
                [MarketPlace.Ostrov]: ['produkty-pitaniya/detskoe-pitanie/smesi-kashi-detskie/smes-nestogen-2-dlya-regulyarnogo-myagkogo-stula-s-6-mesyatsev-300-g/'],
                [MarketPlace.Gippo]: ['detskie-tovary-igrushki-isg221/detskoe-pitanie-isg349/smesi-isg190/smes-sukhaya-molochnaya-posled-adaptirov-moment-prigot-nestogen-2-s-omega-3-pnzhk-i-laktobakt-ves-30-4600680013060/'],
                [MarketPlace.Green]: ['20788605'],
                [MarketPlace.Buslik] : ['pitanie_i_kormlenie/molochnye_smesi/smesi_dlya_detey_do_goda/nestogen_2_detskoe_molochko_sukhoy_bystrorastvorimyy_molochnyy_napitok_s_prebiotikami_i_laktobakteri_1/']
            },
            1050 : {
                [MarketPlace.DetskiyMir]: ['3163069'],
                [MarketPlace.EDostavka]: ['item_917994.html'],
                [MarketPlace.Wildberries]: ['70916433'],
                [MarketPlace.Gippo]: ['detskie-tovary-igrushki-isg221/detskoe-pitanie-isg349/smesi-isg190/smes-sukhaya-adaptirov-nestogen-2-s-prebiotik-i-laktobakt-l-reuteri-ves-3-350g-dp-s-6-mes-4600680008554/'],
                [MarketPlace.Buslik] : ['pitanie_i_kormlenie/molochnye_smesi/smesi_dlya_detey_do_goda/nestogen_2_detskoe_molochko_sukhoy_bystrorastvorimyy_molochnyy_napitok_s_prebiotikami_i_laktobakteri/']
            }
        },
        3 : {
            300 : {
                [MarketPlace.DetskiyMir]: ['3277744'],
                [MarketPlace.Wildberries]: ['73679921'],
                [MarketPlace.Ostrov]: ['produkty-pitaniya/detskoe-pitanie/smesi-kashi-detskie/molochko-nestogen-3-dlya-komfortnogo-pishchevareniya-s-prebiotikami-i-laktobakteriyami-s-12-mesyatsev-300-g/'],
                [MarketPlace.Gippo]: ['detskie-tovary-igrushki-isg221/detskoe-pitanie-isg349/smesi-isg190/sukhoy-bystrorastvor-mol-napitok-quot-nestogen-3-detskoe-molochko-quot-s-prebiotikami-i-laktobakter--4600680013077/'],
                [MarketPlace.Green]: ['20788606'],
                [MarketPlace.Buslik]: ['pitanie_i_kormlenie/molochnye_smesi/smesi_dlya_detey_posle_goda/smes_nestogen_3_300g/'],
            }
        }
    },
    Pampers: {
        PremiumCare: {
            '4-38': {
                [MarketPlace.DetskiyMir]: ['3960216'],
                [MarketPlace.Buslik]: ['podguzniki/trusiki_podguzniki/trusiki_podguzniki_pampers_premium_care_econom_4_9_15_kg_38_shtuk/'],
                [MarketPlace.Mila]: ['7924576'],
                [MarketPlace.Ostrov]: ['tovary-dlya-detey/gigiena-i-ukhod-za-detmi/podguzniki-trusiki/podguzniki-trusiki-pampers-premium-care-pants-maxi-9-15-kg-38-sht/'],
                [MarketPlace._21Vek]: ['premiumcare4maxi_pampers_02.html'],
                [MarketPlace.EDostavka]: ['item_795738.html'],
                [MarketPlace.Wildberries]: ['38665434', '67612130', '70674153'],
                [MarketPlace.Ozon]: ['podguzniki-trusiki-pampers-premium-care-dlya-malyshey-9-15-kg-4-razmer-38-sht-301596447'],
                [MarketPlace.Gippo]: ['detskie-tovary-igrushki-isg221/podguzniki-pelenki--isg112/pampers-podguzniki-trusiki-premium-care-pants-d-malch-i-devochek-maxi-9-15-kg-ekonomich-upakovka-38-8006540186336/'],
                [MarketPlace.Green]: [],
            },
            '4-76': {
                [MarketPlace.DetskiyMir]: [],
                [MarketPlace.Buslik]: [],
                [MarketPlace.Mila]: [],
                [MarketPlace.Ostrov]: [],
                [MarketPlace._21Vek]: ['premiumcarepants4maxi_pampers_02.html'],
                [MarketPlace.EDostavka]: [],
                [MarketPlace.Wildberries]: ['38666897'],
                [MarketPlace.Ozon]: ['podguzniki-trusiki-pampers-premium-care-dlya-malyshey-9-15-kg-4-razmer-76-sht-301596389'],
                [MarketPlace.Gippo]: [],
                [MarketPlace.Green]: [],
            },
            '4-58': {
                [MarketPlace.DetskiyMir]: ['3960212'],
                [MarketPlace.Buslik]: ['podguzniki/trusiki_podguzniki/trusiki_podguzniki_pampers_premium_care_jumbo_4_9_15_kg_58_shtuk/'],
                [MarketPlace.Mila]: ['7924734'],
                [MarketPlace.Ostrov]: [],
                [MarketPlace._21Vek]: ['premiumcare4maxi_pampers_04.html'],
                [MarketPlace.EDostavka]: ['item_835504.html'],
                [MarketPlace.Wildberries]: ['38664828'],
                [MarketPlace.Ozon]: ['detskie-podguzniki-pampers-premium-care-detskie-podguzniki-obespechivayut-suhost-do-12-231352940', 'podguzniki-trusiki-pampers-premium-care-dlya-malyshey-9-15-kg-4-razmer-58-sht-301596383'],
                [MarketPlace.Gippo]: ['detskie-tovary-igrushki-isg221/podguzniki-pelenki--isg112/pampers-podguzniki-trusiki-premium-care-pants-d-malch-i-devochek-maxi-9-15-kg-upakovka-58-8006540186176/'],
                [MarketPlace.Green]: ['137740562'],
            },
            '5-20': {
                [MarketPlace.Green]: ['113469292']
            },
            '5-34': {
                [MarketPlace.DetskiyMir]: ['3960217'],
                [MarketPlace.Buslik]: ['podguzniki/trusiki_podguzniki/trusiki_podguzniki_pampers_premium_care_econom_5_12_17_kg_34_shtuk/'],
                [MarketPlace.Mila]: ['7924575'],
                [MarketPlace.Ostrov]: ['tovary-dlya-detey/gigiena-i-ukhod-za-detmi/podguzniki-trusiki/trusiki-podguzniki-pampers-premium-care-12-17-kg-razmer-5-34-sht/'],
                [MarketPlace._21Vek]: ['premiumcarepremium5junior_pampers.html'],
                [MarketPlace.EDostavka]: [],
                [MarketPlace.Wildberries]: ['38662381', '72278327'],
                [MarketPlace.Ozon]: ['podguzniki-trusiki-pampers-premium-care-dlya-malyshey-12-17-kg-5-razmer-34-sht-301596446', 'podguzniki-trusiki-pampers-premium-care-12-17-kg-razmer-5-34-sht-521506758', 'trusiki-pampers-premium-care-12-17-kg-razmer-5-34-sht-257670252',
                    'podguzniki-trusiki-pampers-premium-care-pants-5-34sht-12-17kg-539232584', 'pampers-premium-care-trusiki-razmer-5-34-trusikov-12kg-17kg-328365658'],
                [MarketPlace.Gippo]: [],
                [MarketPlace.Green]: [],
            },
            '5-52': {
                [MarketPlace.Green]: ['137740563'],
                [MarketPlace.Wildberries]: ['38667571', '70634348'],
                [MarketPlace._21Vek]: ['premiumcare5junior_pampers_02.html'],
                [MarketPlace.Buslik]: ['podguzniki/trusiki_podguzniki/trusiki_podguzniki_pampers_premium_care_jumbo_5_12_17_kg_52_sht/']
            }
        }
    }
}


module.exports = productsMap;
