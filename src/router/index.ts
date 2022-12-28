import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/pages/Index.vue';
import GameList from '@/pages/Game/GameList.vue';
import GamePage from '@/pages/Game/GamePage.vue';
import GameAbout from '@/pages/Game/About.vue';
import GameReview from '@/pages/Game/Review.vue';
import NFTItem from '@/pages/NFTMarket/NFTItem.vue';
import NFTMarket from '@/pages/NFTMarket/NFTMarket.vue';
import BlogAndNews from '@/pages/Profile/BlogAndNews.vue';
import Profile from '@/pages/Profile/Index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/gameList',
      name: 'gameList',
      component: GameList
    },
    {
      path: '/gamePage',
      name: 'gamePage',
      redirect: '/gameAbout',
      component: GamePage,
      children: [
        {
          path: '/gameAbout',
          name: 'gameAbout',
          component: GameAbout,
        },
        {
          path: '/gameReview',
          name: 'gameReview',
          component: GameReview,
        }
      ]
    },
    {
      path: '/NFTItem',
      name: 'NFTItem',
      component: NFTItem
    },
    {
      path: '/NFTMarket',
      name: 'NFTMarket',
      component: NFTMarket
    },
    {
      path: '/streamList',
      name: 'streamList',
      component: () => import('../pages/BlogNews/StreamList.vue')
    },

    {
      path: '/ambassadors',
      name: 'ambassadors',
      component: () => import('../pages/Ambassadors.vue')
    },
    {
      path: '/creativeStudio',
      name: 'creativeStudio',
      component: () => import('../pages/CreativeStudio/Index.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../pages/Comments.vue')
    },
    {
      path: '/streamPage',
      name: 'streamPage',
      component: () => import('../pages/BlogNews/StreamPage.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../pages/BlogNews/Donate.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      redirect: '/profile/blogAndNews',
      children: [
        {
          path: '/profile/tournaments',
          name: 'p-tournaments',
          component: () => import('../pages/Profile/Tournaments.vue'),
        },
        {
          path: '/profile/blogAndNews',
          name: 'blogAndNews',
          component: BlogAndNews,
        },
        {
          path: '/profile/wallet',
          name: 'wallet',
          component: () => import('../pages/Profile/Wallet.vue'),
        },
      ],
    },
    {
      path: '/profile/:name',
      name: 'sub-wallet',
      component: () => import('../pages/Profile/SubWallet.vue'),
      children: [
        {
          path: '/profile/fixStaiking',
          name: 'fixStaiking',
          component: () => import('../pages/Profile/FixStaiking.vue')
        },
        {
          path: '/profile/defiStaiking',
          name: 'defiStaiking',
          component: () => import('../pages/Profile/DefiStaiking.vue')
        },
        {
          path: '/profile/launchpad',
          name: 'launchpad',
          component: () => import('../pages/Profile/Launcpad.vue')
        }
      ]
    },
    {
      path: '/profile/settings',
      name: 'settings',
      component: () => import('../pages/Settings/SettingsPage.vue'),
      redirect: '/profile/settings/MyProfile',
      children: [
        {
          path: '/profile/settings/MyProfile',
          name: 'MyProfileSettings',
          component: () => import('../components/Singular/Settings/MyProfile.vue'),
        },
        {
          path: '/profile/settings/security',
          name: 'securitySettings',
          component: () => import('../components/Singular/Settings/Security.vue'),
        },
        {
          path: '/profile/settings/verification',
          name: 'verificationSettings',
          component: () => import('../components/Singular/Settings/Verification.vue'),
        },
        {
          path: '/profile/settings/settings',
          name: 'settingsSettings',
          component: () => import('../components/Singular/Settings/Settings.vue'),
        }
      ],
    },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: () => import('../pages/Tournaments/TournamentsPage.vue'),
    },
    {
      path: '/tournaments/game',
      name: 'tournaments-redirect',
      redirect: '/tournaments',
    },
    {
      path: '/tournaments/game/:id',
      name: 'game',
      component: () => import('../pages/Tournaments/TournamentsGamePage.vue'),
    },
    {
      path: '/joinGuild',
      name: 'joinGuild',
      component: () => import('../pages/JoinGuild/JoinGuildPage.vue'),
      redirect: '/joinGuild/stepOne',
      children: [
        {
          path: '/JoinGuild/stepOne',
          name: 'FirstJoinGuild',
          component: () => import('../components/Singular/JoinGuild/FirstJoin.vue'),
        },
        {
          path: '/joinGuild/stepTwo',
          name: 'SecondJoinGuild',
          component: () => import('../components/Singular/JoinGuild/SecondJoin.vue'),
        },
        {
          path: '/joinGuild/stepThree',
          name: 'ThirdJoinGuild',
          component: () => import('../components/Singular/JoinGuild/ThirdJoin.vue'),
        },
        {
          path: '/joinGuild/stepFour',
          name: 'FourthJoinGuild',
          component: () => import('../components/Singular/JoinGuild/FourthJoin.vue'),
        }
      ],
    },
    {
      path: '/formGuild',
      name: 'FormGuild',
      component: () => import('../pages/FormGuild/FormGuildPage.vue'),
      redirect: '/formGuild/stepOne',
      children: [
        {
          path: '/formGuild/stepOne',
          name: 'FirstForm',
          component: () => import('../components/Singular/FormGuild/FirstForm.vue'),
        },
        {
          path: '/formGuild/stepTwo',
          name: 'SecondForm',
          component: () => import('../components/Singular/FormGuild/SecondForm.vue'),
        },
        {
          path: '/formGuild/stepThree',
          name: 'ThirdForm',
          component: () => import('../components/Singular/FormGuild/ThirdForm.vue'),
        },
        {
          path: '/formGuild/stepFour',
          name: 'FourthForm',
          component: () => import('../components/Singular/FormGuild/FourthForm.vue'),
        },
        {
          path: '/formGuild/stepFive',
          name: 'FifthForm',
          component: () => import('../components/Singular/FormGuild/FifthForm.vue'),
        }
      ],
    },
    {
      path: '/Launchpad',
      name: 'Launchpad',
      component: () => import('../pages/Launchpad/LaunchpadPage.vue'),
    },
    {
      path: '/Launchpad/AllProjects',
      name: 'AllProjects',
      component: () => import('../pages/Launchpad/AllProjectsPage.vue'),
    },
    {
      path: '/Launchpad/ProjectPage',
      name: 'ProjectPageRedirect',
      redirect: '/Launchpad',
    },
    {
      path: '/Launchpad/ProjectPage/:id',
      name: 'ProjectPage',
      component: () => import('../pages/Launchpad/ProjectPage.vue'),
    },
    {
      path: '/becomeAmbassador',
      name: 'becomeAmbassador',
      component: () => import('../pages/BecomeAmbassador/AmbassadorPage.vue'),
    },
    {
      path: '/academy',
      name: 'Academy',
      component: () => import('../pages/Academy/AcademyPage.vue'),
    },
    {
      path: '/creativeStudio',
      name: 'creativeStudio',
      component: () => import('../pages/CreativeStudio/Index.vue'),
      redirect: '/creativeStudio/myContent',
      children: [
        {
          path: '/creativeStudio/myContent',
          name: 'myContent',
          component: () => import('@/pages/CreativeStudio/MyContent.vue')
        },
        {
          path: '/creativeStudio/analytics',
          name: 'analytics',
          component: () => import('@/pages/CreativeStudio/Analytics.vue'),
          redirect: '/creativeStudio/review',
          children: [
            {
              path: '/creativeStudio/review',
              name: 'creativeStudioReview',
              component: () => import('@/pages/CreativeStudio/Review.vue'),
            },
            {
              path: '/creativeStudio/content',
              name: 'creativeStudioContent',
              component: () => import('@/pages/CreativeStudio/Content.vue'),
            },
            {
              path: '/creativeStudio/audience',
              name: 'creativeStudioAudience',
              component: () => import('@/pages/CreativeStudio/Audience.vue'),
            }
          ]
        },
        {
          path: '/creativeStudio/monetization',
          name: 'monetization',
          component: () => import('@/pages/CreativeStudio/Monetization.vue')
        },
        {
          path: '/creativeStudio/profileSettings',
          name: 'profileSettings',
          component: () => import('@/pages/CreativeStudio/ProfileSettings.vue')
        },
      ]
    },
    {
      path: '/connectWallet',
      name: 'connectWallet',
      component: () => import('@/pages/ConnectWallet/ConnectWalletPage.vue'),
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: () => import('@/pages/Leaderboard/LeaderboadPage.vue'),
      redirect: '/leaderboard/profile',
      children: [
        {
          path: '/leaderboard/profile',
          name: 'leaderboard-profile',
          component: () => import('@/components/Singular/Leaderboard/Profile.vue')
        },
        {
          path: '/leaderboard/nft',
          name: 'leaderboard-nft',
          component: () => import('@/components/Singular/Leaderboard/NFT.vue')
        }, 
        {
          path: '/leaderboard/achivements',
          name: 'leaderboard-achivements',
          component: () => import('@/components/Singular/Leaderboard/Achivements.vue')
        }, 
        {
          path: '/leaderboard/statistics',
          name: 'leaderboard-statistics',
          component: () => import('@/components/Singular/Leaderboard/Statistics.vue')
        }, 
        {
          path: '/leaderboard/guild',
          name: 'leaderboard-guild',
          component: () => import('@/components/Singular/Leaderboard/Guild.vue')
        },
      ]
    },
    {
      path: '/governance',
      name: 'governance',
      component: () => import('../pages/Governance/Index.vue'),
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import('../pages/Governance/Vote.vue'),
    },
    {
      path: '/staking',
      name: 'staking',
      component: () => import('../pages/Staking/Index.vue'),
      redirect: '/staking/fixStaking',
      children: [
        {
          path: '/staking/fixStaking',
          name: 'fix-staking',
          component: () => import('../pages/Staking/FixStaking.vue'),
        },
        {
          path: '/staking/defiStaking',
          name: 'defi-staking',
          component: () => import('../pages/Staking/DefiStaking.vue'),
        },
      ]
    },
    {
      path: '/mysteryBox',
      name: 'mysteryBox',
      component: () => import('../pages/MysteryBox/MysteryBoxPage.vue'),
    },
    {
      path: '/courses/creativeTraining',
      name: 'creativeTraining',
      component: () => import('../pages/Courses/CreativeTraining.vue'),
    },
    { 
      path: '/courses/web3Developer',
      name: 'web3Developer',
      component: () => import('../pages/Courses/Web3Developer.vue'),
    },
    {
      path: '/courses/gameplayTraining',
      name: 'gameplayTraining',
      component: () => import('../pages/Courses/GameplayTraining.vue'),
    },
    {
      path: '/courses/web3Basics',
      name: 'web3Basics',
      component: () => import('../pages/Courses/Web3Basics.vue'),
    },
    {
      path: '/courses/tradingBasics',
      name: 'tradingBasics',
      component: () => import('../pages/Courses/TradingBasics.vue'),
    },
    {
      path: '/courses/gamedevTraining',
      name: 'gamedevTraining',
      component: () => import('../pages/Courses/GamedevTraining.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../pages/Upload/Index.vue'),
    },
    {
      path: '/verification',
      name: 'verification',
      component: () => import('../pages/Upload/Verification.vue'),
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('../pages/Upload/Deposit.vue'),
    },
    {
      path: '/joinCourse',
      name: 'joinCourse',
      component: () => import('../pages/JoinCourse/JoinCoursePage.vue'),
      redirect: '/joinCourse/stepOne',
      children: [
        {
          path: '/joinCourse/stepOne',
          name: 'firstJoin',
          component: () => import('../components/Singular/JoinCourse/FirstJoin.vue'),
        },
        {
          path: '/joinCourse/stepTwo',
          name: 'secondJoin',
          component: () => import('../components/Singular/JoinCourse/SecondJoin.vue'),
        },
        {
          path: '/joinCourse/stepThree',
          name: 'thirdJoin',
          component: () => import('../components/Singular/JoinCourse/ThirdJoin.vue'),
        },
        {
          path: '/joinCourse/stepFour',
          name: 'fourthJoin',
          component: () => import('../components/Singular/JoinCourse/FourthJoin.vue'),
        },
      ],
    },
  ]
})

export default router
