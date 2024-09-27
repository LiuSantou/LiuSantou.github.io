import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      title: 'Ragnarok Image Generator',
      description: 'Generate AI-enhanced images using different models and styles.',
      imageGenerator: 'Ragnarok Image',
      logoGenerator: 'Ragnarok Logo',
      generate: 'Generate',
      generating: 'Generating...',
      showLogo: 'Show Logo',
      showImage: 'Show Image',
      model: 'Model',
      style: 'Style',
      logoPrompt: 'Prompt',
      prompt: 'Prompt',
      negativePrompt: 'Negative Prompt',
      sampler: 'Sampler',
      size: 'Size',
      enterYourPrompt: 'Enter your prompt',
      enterNegativePrompt: 'Enter negative prompt(English only)',
      logoEnterYourPrompt: 'Enter your prompt(English only)',
      symbolOrPictorial: 'Symbol or Pictorial',
      abstract: 'Abstract',
      mascot: 'Mascot',
      emblem: 'Emblem',
      threeD: '3D',
      privacyPolicy: "Privacy Policy",
      privacyPolicyContent: {
        "section1": {
          "title": "1. Information Collection",
          "p1": "We do not store any prompts or generated images. Our service operates without the need for user registration or login.",
          "p2": "We do not save any cache or cookies, ensuring that no personal information is stored on our servers or your device."
        },
        "section2": {
          "title": "2. Use of Information",
          "p1": "As we do not collect or store any personal information, there is no use or sharing of such data.",
          "p2": "The images you generate are created in real-time and are not saved or stored by our service."
        },
        "section3": {
          "title": "3. Data Protection",
          "p1": "While we do not store personal data, we still employ industry-standard security measures to protect our service from unauthorized access or use."
        },
        "section4": {
          "title": "4. Changes to This Privacy Policy",
          "p1": "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
        },
        "section5": {
          "title": "5. Contact Us",
          "p1": "If you have any questions about this Privacy Policy, please contact us."
        }
      },
      termsOfService: "Terms of Service",
      termsOfServiceContent: {
        "section1": {
          "title": "1. Terms",
          "p1": "By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.",
          "p2": "All content generated using our service is subject to these terms.",
          "p3": "We reserve the right to modify these terms at any time without prior notice. Your continued use of the service after changes constitutes acceptance of the new terms."
        },
        "section2": {
          "title": "2. Use License",
          "p1": "Permission is granted to temporarily download one copy of the materials on our Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
          "p2": "- modify or copy the materials;\n- use the materials for any commercial purpose or for any public display;\n- attempt to reverse engineer any software contained on our Website;\n- remove any copyright or other proprietary notations from the materials; or\n- transferring the materials to another person or 'mirror' the materials on any other server."
        },
        "section3": {
          "title": "3. Disclaimer",
          "p1": "All the materials on our Website are provided 'as is'. We make no warranties, may it be expressed or implied, therefore negates all other warranties.",
          "p2": "We do not guarantee the accuracy, likely results, or reliability of the use of the materials on our Website or otherwise relating to such materials or on any resources linked to this Website.",
          "p3": "The service is provided on an 'as is' and 'as available' basis. We do not warrant that the service will be uninterrupted, timely, secure, or error-free.",
          "p4": "We are not responsible for the content generated by users using our service. Users are solely responsible for the content they create and share."
        },
        "section4": {
          "title": "4. Limitations",
          "p1": "In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.",
          "p2": "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
        },
        "section5": {
          "title": "5. Revisions and Errata",
          "p1": "The materials appearing on our Website may include technical, typographical, or photographic errors. We do not warrant that any of the materials on our Website are accurate, complete, or current. We may make changes to the materials contained on our Website at any time without notice. We do not, however, make any commitment to update the materials."
        },
        "section6": {
          "title": "6. Links",
          "p1": "We have not reviewed all of the sites linked to our Website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk."
        },
        "section7": {
          "title": "7. Site Terms of Use Modifications",
          "p1": "We may revise these terms of use for our Website at any time without notice. By using this Website you are agreeing to be bound by the then current version of these Terms and Conditions of Use."
        },
        "section8": {
          "title": "8. Your Privacy",
          "p1": "Please read our Privacy Policy.",
          "p2": "By using our service, you agree to our collection and use of your data as described in our Privacy Policy."
        },
        "section9": {
          "title": "9. Governing Law",
          "p1": "Any claim relating to our Website shall be governed by the laws of the country in which we operate without regard to its conflict of law provisions."
        },
        "section10": {
          "title": "10. Contact Information",
          "p1": "If you have any questions about these Terms, please contact us."
        }
      },
      aboutUs: {
        "title": "About Us",
        "intro": "Welcome to our AI-powered image and logo generation service. As a solo entrepreneur, I'm dedicated to providing cutting-edge creative solutions.",
        "mission": {
          "title": "Our Mission",
          "content": "To empower individuals and businesses with innovative AI tools for creating stunning visuals and logos."
        },
        "background": {
          "title": "Background",
          "content": "With a background in AI and design, I've combined my passion for technology and creativity to develop this unique service."
        },
        "approach": {
          "title": "Our Approach",
          "content": "We leverage state-of-the-art AI models to deliver high-quality, customized visual content while prioritizing user privacy and ease of use."
        }
      },
      contactUs: "Contact Us",
      contactUsContent: {
        "title": "Contact Us",
        "name": "Name",
        "email": "Email Address",
        "message": "Message",
        "submit": "Submit",
        "success": "Message sent successfully!",
        "error": "An error occurred while sending the message. Please try again later."
      }
    },
    shop: {
      companyName: 'Ragnarok Shop',
      companyLogo: 'Company Logo',
      searchPlaceholder: 'Search products...',
      search: 'Search',
      home: 'Home',
      products: 'Products',
      contact: 'Contact',
      aboutUs: 'About Us',
      aboutUsDescription: 'We are a company dedicated to providing high-quality products.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      shopUrl: 'Shop URL',
      phone: 'Phone',
      copyright: '© {year} Ragnarok Shop. All rights reserved.',
      productListForCategory: 'Products in category {id}',
      currency: '${amount}',
      quickView: 'Quick View',
      addToCart: 'Add to Cart',
      productCategories: 'Product Categories'
    }
  },
  zh: {
    message: {
      title: '终末的图像生成器',
      description: '使用不同的模型和风格生成 AI 增强图像。',
      imageGenerator: '终末的图像',
      logoGenerator: '终末的Logo',
      generate: '生成',
      generating: '生成中...',
      showLogo: '显示Logo',
      showImage: '显示图像',
      model: '模型',
      style: '风格',
      logoPrompt: '内容提示词',
      prompt: '提示词',
      negativePrompt: '负面提示词',
      sampler: '采样器',
      size: '尺寸',
      enterYourPrompt: '输入提示词',
      enterNegativePrompt: '输入负面提示词(仅限英语)',
      logoEnterYourPrompt: '输入内容提示词(仅限英语)',
      symbolOrPictorial: '标识/符号',
      abstract: '抽象',
      mascot: '吉祥物',
      emblem: 'Logo',
      threeD: '3D',
      privacyPolicy: "隐私政策",
      privacyPolicyContent: {
        "section1": {
          "title": "1. 信息收集",
          "p1": "我们不存储任何提示词或生成的图像。我们的服务无需用户注册或登录即可使用。",
          "p2": "我们不保存任何缓存或cookies，确保不会在我们的服务器或您的设备上存储任何个人信息。"
        },
        "section2": {
          "title": "2. 信息使用",
          "p1": "由于我们不收集或存储任何个人信息，因此不会使用或共享此类数据。",
          "p2": "您生成的图像是实时创建的，我们的服务不会保存或存储这些图像。"
        },
        "section3": {
          "title": "3. 数据保护",
          "p1": "虽然我们不存储个人数据，但我们仍然采用行业标准的安全措施来保护我们的服务免受未经授权的访问或使用。"
        },
        "section4": {
          "title": "4. 隐私政策的变更",
          "p1": "我们可能会不时更新我们的隐私政策。我们会通过在此页面上发布新的隐私政策来通知您任何变更。"
        },
        "section5": {
          "title": "5. 联系我们",
          "p1": "如果您对本隐私政策有任何疑问，请联系我们。"
        }
      },
      termsOfService: "服务条款",
      termsOfServiceContent: {
        "section1": {
          "title": "1. 条款",
          "p1": "通过访问本网站,您同意受这些网站使用条款和条件的约束,并同意您有责任遵守任何适用的当地法律。如果您不同意这些条款中的任何一条,您将被禁止访问本网站。本网站包含的材料受版权和商标法保护。",
          "p2": "使用我们的服务生成的所有内容都受这些条款约束。",
          "p3": "我们保留随时修改这些条款的权利,恕不另行通知。在更改后继续使用本服务即表示您接受新的条款。"
        },
        "section2": {
          "title": "2. 使用许可",
          "p1": "允许暂时下载我们网站上的材料的一份副本,仅供个人、非商业性的临时查看。这是授予许可,而非所有权转让,根据此许可,您不得:",
          "p2": "- 修改或复制材料;\n- 将材料用于任何商业目的或任何公开展示;\n- 试图对我们网站上包含的任何软件进行逆向工程;\n- 从材料中删除任何版权或其他专有注释;\n- 将材料转让给他人或在任何其他服务器上'镜像'材料。"
        },
        "section3": {
          "title": "3. 免责声明",
          "p1": "我们网站上的所有材料均按'原样'提供。我们不作任何明示或暗示的保证,因此否定所有其他保证。",
          "p2": "我们不保证使用我们网站上的材料或与这些材料相关的任何资源的准确性、可能结果或可靠性。",
          "p3": "本服务按'原样'和'可用'的基础提供。我们不保证服务将不间断、及时、安全或无错误。",
          "p4": "我们不对用户使用我们的服务生成的内容负责。用户对他们创建和分享的内容全权负责。"
        },
        "section4": {
          "title": "4. 责任限制",
          "p1": "在任何情况下,我们或我们的供应商均不对因使用或无法使用我们网站上的材料而造成的任何损害(包括但不限于数据丢失或利润损失,或由于业务中断而造成的损害)负责,即使我们或授权代表已口头或书面通知可能发生此类损害。",
          "p2": "由于某些司法管辖区不允许对默示保证的限制,或对间接或附带损害的责任限制,这些限制可能不适用于您。"
        },
        "section5": {
          "title": "5. 修订和勘误",
          "p1": "我们网站上出现的材料可能包含技术、排版或摄影错误。我们不保证我们网站上的任何材料准确、完整或最新。我们可能随时更改网站上包含的材料,恕不另行通知。但我们不承诺更新材料。"
        },
        "section6": {
          "title": "6. 链接",
          "p1": "我们没有审查所有链接到我们网站的站点，对任何此类链接站点的内容不负责任。任何链接的包含并不意味着我们对该站点的认可。使用任何此类链接网站的风险由用户自行承担。"
        },
        "section7": {
          "title": "7. 网站使用条款修改",
          "p1": "我们可能随时修改这些网站使用条款，恕不另行通知。使用本网站即表示您同意受当时这些使用条款和条件的最新版本的约束。"
        },
        "section8": {
          "title": "8. 您的隐私",
          "p1": "请阅读我们的隐私政策。",
          "p2": "使用我们的服务即表示您同意我们按照隐私政策中的描述收集和使用您的数据。"
        },
        "section9": {
          "title": "9. 管辖法律",
          "p1": "与我们网站有关的任何索赔应受我们运营所在国家/地区的法律管辖，而不考虑其法律冲突规定。"
        },
        "section10": {
          "title": "10. 联系信息",
          "p1": "如果您对这些条款有任何疑问，请联系我们。"
        }
      },
      aboutUs: {
        "title": "关于我们",
        "intro": "欢迎来到我们的AI驱动的图像和标志生成服务。作为一名个人事业者，我致力于提供尖端的创意解决方案。",
        "mission": {
          "title": "我们的使命",
          "content": "通过创新的AI工具赋能个人和企业，帮助他们创造令人惊叹的视觉效果和标志。"
        },
        "background": {
          "title": "背景",
          "content": "凭借AI和设计领域的背景，我将对技术和创意的热情相结合，开发了这项独特的服务。"
        },
        "approach": {
          "title": "我们的方法",
          "content": "我们利用最先进的AI模型，在优先考虑用户隐私和易用性的同时，提供高质量、定制化的视觉内容。"
        }
      },
      contactUs: "联系我们",
      contactUsContent: {
        "title": "联系我们",
        "name": "姓名",
        "email": "电子邮件地址",
        "message": "信息",
        "submit": "提交",
        "success": "信息已成功发送！",
        "error": "信息发送过程中出现错误。请稍后再试。"
      }
    },
    shop: {
      companyName: '终末的矮人',
      companyLogo: '公司标志',
      searchPlaceholder: '搜索产品...',
      search: '搜索',
      home: '首页',
      products: '产品',
      contact: '联系我们',
      aboutUs: '关于我们',
      aboutUsDescription: '我们是一家致力于提供高质量产品的公司。',
      quickLinks: '快速链接',
      contactUs: '联系我们',
      shopUrl: '商店网址',
      phone: '电话',
      copyright: '© {year} 诸神黄昏商店。保留所有权利。',
      productListForCategory: '类别 {id} 中的产品',
      currency: '¥{amount}',
      quickView: '快速查看',
      addToCart: '加入购物车',
      productCategories: '产品类别'
    }
  },
  ja: {
    message: {
      title: '終末の画像生成',
      description: '異なるモデルとスタイルを使用してAI強化画像を生成します。',
      imageGenerator: '終末の画像',
      logoGenerator: '終末のロゴ',
      generate: '生成',
      generating: '生成中...',
      showLogo: 'ロゴを表示',
      showImage: '画像を表示',
      model: 'モデル',
      style: 'スタイル',
      logoPrompt: 'テーマ',
      prompt: '指示',
      negativePrompt: '否定的な指示',
      sampler: 'サンプラー',
      size: 'サイズ',
      enterYourPrompt: '指示を入力(英語のみ)',
      enterNegativePrompt: '否定的な指示を入力(英語のみ)',
      logoEnterYourPrompt: 'テーマを入力',
      symbolOrPictorial: '記号/ピクトリアル',
      abstract: '抽象',
      mascot: 'マスコット',
      emblem: 'ロゴ',
      threeD: '3D',
      privacyPolicy: "プライバシーポリシー",
      privacyPolicyContent: {
        "section1": {
          "title": "1. 情報収集",
          "p1": "当社はプロンプトや生成された画像を保存しません。当社のサービスはユーザー登録やログインなしで利用できます。",
          "p2": "当社はキャッシュやクッキーを保存しないため、当社のサーバーやお客様のデバイスに個人情報が保存されることはありません。"
        },
        "section2": {
          "title": "2. 情報の使用",
          "p1": "当社は個人情報を収集または保存しないため、そのようなデータの使用や共有は行いません。",
          "p2": "お客様が生成した画像はリアルタイムで作成され、当社のサービスでは保存または保管されません。"
        },
        "section3": {
          "title": "3. データ保護",
          "p1": "個人データを保存しませんが、当社は業界標準のセキュリティ対策を採用し、当社のサービスを不正アクセスや不正使用から保護しています。"
        },
        "section4": {
          "title": "4. プライバシーポリシーの変更",
          "p1": "当社は随時プライバシーポリシーを更新することがあります。変更がある場合は、このページに新しいプライバシーポリシーを掲載してお知らせします。"
        },
        "section5": {
          "title": "5. お問い合わせ",
          "p1": "このプライバシーポリシーについてご質問がある場合は、当社にお問い合わせください。"
        }
      },
      termsOfService: "利用規約",
      termsOfServiceContent: {
        "section1": {
          "title": "1. 利用規約",
          "p1": "本ウェブサイトにアクセスすることにより、あなたはこのウェブサイトの利用規約に拘束されることに同意し、適用される地域法を遵守する責任があることに同意するものとします。これらの規約のいずれかに同意しない場合、本サイトへのアクセスは禁止されます。本ウェブサイトに含まれる資料は、著作権および商標法によって保護されています。",
          "p2": "当社のサービスを使用して生成されたすべてのコンテンツは、これらの規約の対象となります。",
          "p3": "当社は、事前の通知なしにいつでもこれらの規約を変更する権利を留保します。変更後もサービスの利用を継続することは、新しい規約に同意したものとみなされます。"
        },
        "section2": {
          "title": "2. 使用許諾",
          "p1": "個人的、非商業的な一時的閲覧のみを目的として、本ウェブサイト上の資料のコピーを一時的にダウンロードすることが許可されます。これは使用許諾であり、所有権の譲渡ではありません。この許諾の下で、以下の行為は禁止されています：",
          "p2": "- 資料の修正または複製\n- 商業目的または公開展示のための資料の使用\n- 本ウェブサイトに含まれるソフトウェアのリバースエンジニアリングの試み\n- 資料からの著作権またはその他の所有権表示の削除\n- 他者への資料の転送または他のサーバーでの資料の'ミラーリング'"
        },
        "section3": {
          "title": "3. 免責事項",
          "p1": "本ウェブサイト上のすべての資料は'現状のまま'提供されます。当社は、明示または黙示を問わず、いかなる保証も行わず、したがってその他のすべての保証を否定します。",
          "p2": "当社は、本ウェブサイト上の資料の使用またはそれに関連するリソースの使用の正確性、可能性のある結果、または信頼性について保証しません。",
          "p3": "本サービスは'現状のまま'および'利用可能な状態で'提供されます。当社は、サービスが中断されないこと、タイムリーであること、安全であること、またはエラーがないことを保証しません。",
          "p4": "当社は、ユーザーが当社のサービスを使用して生成したコンテンツについて責任を負いません。ユーザーは、自身が作成および共有するコンテンツに対して全責任を負います。"
        },
        "section4": {
          "title": "4. 責任の制限",
          "p1": "いかなる場合も、当社または当社のサプライヤーは、本ウェブサイト上の資料の使用または使用不能から生じるいかなる損害（データまたは利益の損失、または事業中断による損害を含むがこれらに限定されない）についても責任を負いません。これは、当社または当社の認定代表者がそのような損害の可能性について口頭または書面で通知されていた場合でも同様です。",
          "p2": "一部の司法管轄区では、黙示の保証の制限や、結果的または付随的損害の責任の制限を認めていないため、これらの制限が適用されない場合があります。"
        },
        "section5": {
          "title": "5. 改訂および誤植",
          "p1": "本ウェブサイトに掲載されている資料には、技術的、誤植、または写真の誤りが含まれている可能性があります。当社は、本ウェブサイト上の資料が正確、完全、または最新であることを保証しません。当社は、事前の通知なしにいつでも本ウェブサイトに含まれる資料を変更することがあります。ただし、当社は資料を更新する義務を負いません。"
        },
        "section6": {
          "title": "6. リンク",
          "p1": "当社は、本ウェブサイトにリンクされているすべてのサイトを審査しておらず、そのようなリンクサイトの内容について責任を負いません。リンクの掲載は、当社がそのサイトを推奨していることを意味するものではありません。そのようなリンクされたウェブサイトの使用は、ユーザー自身のリスクで行ってください。"
        },
        "section7": {
          "title": "7. サイト利用規約の修正",
          "p1": "当社は、事前の通知なしにいつでも本ウェブサイトの利用規約を改訂することがあります。本ウェブサイトを使用することにより、あなたはその時点で最新の利用規約に拘束されることに同意するものとします。"
        },
        "section8": {
          "title": "8. あなたのプライバシー",
          "p1": "当社のプライバシーポリシーをお読みください。",
          "p2": "当社のサービスを使用することにより、あなたは当社のプライバシーポリシーに記載されているデータの収集と使用に同意するものとします。"
        },
        "section9": {
          "title": "9. 準拠法",
          "p1": "当社のウェブサイトに関するいかなる請求も、当社が事業を運営している国の法律に準拠するものとし、その法律の抵触に関する規定は考慮しないものとします。"
        },
        "section10": {
          "title": "10. 連絡先情報",
          "p1": "これらの規約について質問がある場合は、当社にお問い合わせください。"
        }
      },
      aboutUs: {
        "title": "私たちについて",
        "intro": "終末の画像生成へようこそ。個人事業者として、最先端のクリエイティブソリューションを提供することに専念しています。",
        "mission": {
          "title": "私たちのミッション",
          "content": "革新的なAIツールを通じて、個人や企業が魅力的なビジュアルやロゴを作成できるよう支援すること。"
        },
        "background": {
          "title": "背景",
          "content": "AIとデザインの背景を持つ私は、テクノロジーと創造性への情熱を組み合わせて、このユニークなサービスを開発しました。"
        },
        "approach": {
          "title": "私たちのアプローチ",
          "content": "最先端のAIモデルを活用し、ユーザーのプライバシーと使いやすさを優先しながら、高品質でカスタマイズされたビジュアルコンテンツを提供します。"
        }
      },
      contactUs: "お問い合わせ",
      contactUsContent: {
        "title": "お問い合わせ",
        "name": "御名前",
        "email": "メールアドレス",
        "message": "メッセージ",
        "submit": "送信",
        "success": "メッセージが正常に送信されました！",
        "error": "メッセージの送信中にエラーが発生しました。後でもう一度お試しください。"
      }
    },
    shop: {
      companyName: '終末のドワーフ',
      companyLogo: '',
      searchPlaceholder: '商品を検索。。。',
      search: '検索',
      home: 'ホーム',
      products: '商品',
      contact: 'お問い合わせ',
      aboutUs: '私たちについて',
      aboutUsDescription: '終末の画像生成へようこそ。個人事業者として、最先端のクリエイティブソリューションを提供することに専念しています。',
      quickLinks: 'クイックリンク',
      contactUs: 'お問い合わせ',
      shopUrl: 'ストアURL',
      phone: '電話番号',
      copyright: '© {year} 終末のドワーフ。すべての権利を留保しています。',
      productListForCategory: 'カテゴリー {id} の商品',
      currency: '¥{amount}',
      quickView: 'クイックビュー',
      addToCart: 'カートに追加',
      productCategories: '商品カテゴリー'
    }
  }
}

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'ja',
  messages,
})

export default i18n