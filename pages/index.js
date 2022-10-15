import Head from "next/head"
import Image from "next/image"
import Obfuscate from "react-obfuscate"

import img_kurs_html_cd_action from "../public/images/kurs_html_cd_action.webp"
import img_szablon_allegro from "../public/images/szablon_allegro.webp"
import img_kreator_szablonow_allegro from "../public/images/kreator_szablonow_allegro.webp"
import img_strona_sklepu_stomatologicznego from "../public/images/strona_sklepu_stomatologicznego.webp"
import img_kuala_lumpur_basen from "../public/images/kuala_lumpur_basen.webp"
import img_azja from "../public/images/azja.webp"
import img_kuvi_umowa_sprzedazy from "../public/images/kuvi_umowa_sprzedazy.webp"
import img_jira_work from "../public/images/jira_work.webp"
import img_jira_credits from "../public/images/jira_credits.webp"
import img_wynagrodzenie_etat from "../public/images/wynagrodzenie_etat.webp"
import img_adrian_bienias from "../public/images/adrian_bienias.webp"

export default function Home() {
  return (
    <div className="mt-8 mx-auto px-5 prose prose-lg prose-li:m-0 prose-p:leading-relaxed prose-p:text-justify prose-lead:text-center prose-lead:font-semibold prose-lead:text-xl prose-lead:mx-12 prose-pre:text-base prose-pre:m-0 prose-pre:p-3 prose-ul:-ml-2 prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
      <Head>
        <title>
          Dlaczego warto uczyć się Web Developmentu? Prawdziwa historia...
        </title>
        <meta
          name="description"
          content="Adrian Bienias dzieli się swoimi doświadczeniami z nauki tworzenia stron internetowych."
        />
      </Head>

      <main>
        <h1
          className="font-bold leading-[1.15]"
          id="dlaczego-warto-uczyc-sie-web-developmentu-i-jak-opanowac-wszystkie-najwazniejsze-zagadnienia"
        >
          Dlaczego warto uczyć się Web Developmentu i&nbsp;jak opanować jego
          wszystkie najważniejsze zagadnienia?
        </h1>

        <p>
          Web Development to bardzo szeroka domena. Najczęściej dzieli się ją
          na:
        </p>
        <ul>
          <li>
            <strong>Frontend</strong> - związany z interfejsem użytkownika,
            czyli tym, co wyświetlane jest w przeglądarce internetowej.
          </li>
          <li>
            <strong>Backend</strong> - związany z tym, czego użytkownik nie
            widzi. Tym, co dzieje się na serwerze obsługującym aplikację.
          </li>
        </ul>
        <p>
          Frontendowiec pisze kod tworząc za jego pomocą np. przycisk “złóż
          zamówienie”, który po kliknięciu przesyła dane zamówienia do Backendu.
        </p>
        <p>
          Backendowiec pisze kod, który odbiera te dane i je przetwarza.
          Sprawdza ich poprawność, zapisuje je w bazie danych i np. wysyła
          e-mail do użytkownika, potwierdzający złożenie zamówienia.
        </p>
        <p className="lead">
          Połączenie powyższych dwóch specjalizacji
          (Frontend&nbsp;i&nbsp;Backend) daje Full&nbsp;Stack Developera
        </p>

        <h2 id="dowiedz-sie-czego-nie-wiesz" className="mb-0">
          Dowiedz się czego nie wiesz…
        </h2>
        <p>… a potem naucz się tego.</p>
        <p>
          Proces uczenia się i zdobywania nowych umiejętności dzieli się na 4
          fazy:
        </p>
        <ol>
          <li>Nieświadoma niekompetencja</li>
          <li>Świadoma niekompetencja</li>
          <li>Świadoma kompetencja</li>
          <li>Nieświadoma kompetencja</li>
        </ol>
        <h3>Nieświadoma niekompetencja</h3>
        <p>
          Gdy jesteśmy w pierwszej fazie, nie mamy pojęcia, jak zrealizować dane
          zadanie. A nawet jeśli uda nam się je jakoś zrealizować, to efekt
          końcowy jest daleki od ideału. Niestety nie zdajemy sobie z tego
          sprawy i co gorsza niewiele możemy z tym zrobić. Nie wiemy, czego nie
          wiemy.
        </p>
        <h3>Świadoma niekompetencja</h3>
        <p>
          Przejście do drugiej fazy wymaga w pierwszej kolejności zdobycia
          dokładnych informacji na temat tego, czego nie wiemy. Dopiero
          dowiadując się tego, możemy zacząć się tego uczyć i podnosić swoje
          kompetencje.
        </p>
        <h3>Świadoma kompetencja</h3>
        <p>
          W trzeciej fazie, gdy już wypełniliśmy luki naszej niewiedzy, możemy
          wykonywać pracę kompetentnie. Jednak, im szersza dziedzina, tym więcej
          elementów wymagających zrozumienia.
        </p>
        <p>
          W tej fazie mogą pojawiać się momenty, w których wydaje się nam, że
          jesteśmy już świetni w danej dziedzinie. Z reguły widzimy wtedy tylko
          wierzchołek góry lodowej. Masa kompetencji, których nie mamy jest
          wciąż ukryta pod taflą wody. Musimy stale cofać się do drugiej fazy,
          aby to odkrywać.
        </p>
        <h3>Nieświadoma kompetencja</h3>
        <p>
          Po wieloletniej nauce i praktyce stopniowo wchodzimy do czwartej fazy.
          Na tym etapie efekty naszej pracy są bardzo wysokiej jakości. Sama
          praca nie sprawia już trudności. Niewiele zastanawiamy się, jak coś
          zrobić, bo robiliśmy to już wielokrotnie.
        </p>
        <p>
          Popełniliśmy prawie wszystkie możliwe błędy i wiemy już, jak ich
          unikać. Jest to wówczas tzw. strefa komfortu. Przestajemy się
          rozwijać, a rutynowa praca przestaje nieść satysfakcję.
        </p>
        <p>
          Wtedy też warto znów cofnąć się do drugiego etapu. Spojrzeć z góry na
          cały obszar, w którym jesteśmy ekspertami i zadać sobie pytanie, czy
          interesują nas inne pobliskie gałęzie.
        </p>
        <hr />
        <p>
          Biorąc pod uwagę Web Development, nawet będąc ekspertem w jakimś jego
          obszarze, z pewnością znajdą się gałęzie wiedzy, w których będziesz
          początkujący. Daje to wręcz bezgraniczne możliwości ciągłego rozwoju,
          bez popadania w nudę czy rutynę.
        </p>

        <h2 id="samodzielna-metoda-nauki">Samodzielna metoda nauki</h2>
        <p>
          Jestem po technikum hotelarskim, a moja formalna edukacja zakończyła
          się na maturze. Wszystkie umiejętności, które w życiu pozwalały mi
          zarabiać pieniądze, zdobywałem samodzielnie. Bez jasnego programu
          nauczania.
        </p>
        <p>
          Wiele bym dał, gdybym w przeszłości trafił na ścieżkę nauki Web
          Developmentu. Dowiedział się czego i w jakiej kolejności się uczyć.
        </p>
        <p>
          Zamiast tego błądziłem po omacku poznając najczęściej metodą prób i
          błędów wybiórcze zagadnienia. Przykładowo z fragmentów cudzego kodu
          usuwałem lub dodawałem elementy, próbując się domyślić, jak coś
          zadziała.
        </p>
        <p className="lead">
          HTMLa uczyłem się z magazynu CD-Action, przepisując kod z gazety do
          Windowsowego notatnika
        </p>
        <p>
          Miałem wtedy 14 lat. Początki samej nauki to była droga przez mękę.
          Nie dość, że samo pisanie kodu było obarczone brakiem jakiejkolwiek
          pomocy, to jeszcze najpopularniejszą wtedy przeglądarką był Internet
          Explorer.
        </p>
        <Image
          src={img_kurs_html_cd_action}
          alt="Zdjęcie strony z magazynu CD-Action z kursem HTML"
        />
        <p>
          “Profesjonalny” edytor kodu (notatnik) nie kolorował składni, nie
          dodawał automatycznych wcięć i nie wyłapywał błędów. Ówczesna
          przeglądarka miała masę błędów uniemożliwiających poprawne
          wyświetlenie poprawnie napisanego kodu. Nie było łatwo przez to
          przebrnąć.
        </p>
        <p>
          W domu nie miałem internetu. Aktualizacji stron, które umieszczałem w
          sieci, mogłem dokonywać tylko podczas wizyt w kafejkach internetowych.
        </p>
        <p>
          Aktualnie nieporównywalnie łatwiej jest się uczyć Web Developmentu.
          Szczególnie, jeśli trafisz na gotowy program nauki, który poprowadzi
          Cię za rękę i odpowie na wszystkie nurtujące pytania.
        </p>

        <h2 id="bezpieczenstwo">Bezpieczeństwo</h2>
        <p>
          Brak wiedzy i umiejętności do realizowania konkretnych typów projektów
          to jednak nie jedyny problem. Web Development to również zagrożenia
          związane z bezpieczeństwem.
        </p>
        <p>
          Gdy tworzyłem pierwsze strony, nie zdawałem sobie sprawy z
          podstawowych kwestii bezpieczeństwa. Przykładowo, logowałem się przez
          FTP, aby przerzucić pliki na hosting lub do panelu admina przez
          protokół HTTP.
        </p>
        <p>
          Brak szyfrowania (SFTP, HTTPS) oznaczał, że moje hasło “leciało” po
          sieci w formie czystego tekstu. Wystarczyło więc nasłuchiwać sieć, do
          której byłem podłączony (np. w kafejce internetowej), aby przechwycić
          te hasła. W ten sposób naraziłem się na ataki, w których kod moich
          stron był modyfikowany.
        </p>
        <p>
          Na pierwszy rzut oka Web Development nie wydaje się branżą, którą
          powinny regulować normy bezpieczeństwa. W końcu porównując ją np. do
          budownictwa, nikt nie zginie, jeśli strona się “zawali”.
        </p>
        <p>
          Internet jest jednak pełen historii, w których duże korporacje
          straciły wielkie pieniądze przez niedopilnowanie kwestii
          bezpieczeństwa swoich aplikacji.
        </p>
        <p className="lead">
          Jako Web Developerrzy musimy brać na siebie odpowiedzialność również
          za dane użytkowników
        </p>
        <p>
          Nieszyfrowanie haseł, niezabezpieczanie baz danych to narażanie
          użytkowników na przejęcia kont w innych serwisach lub ataki
          scammerskie. Warto więc traktować kwestie bezpieczeństwa bardzo,
          bardzo poważnie.
        </p>

        <h2 id="od-freelancera-do-inzyniera">Od Freelancera do inżyniera</h2>
        <p>
          Web Development nie wymaga studiów. Wymaga jedynie umiejętności i
          doświadczenia, które możesz zdobywać we własnym zakresie. W moim
          przypadku był to dość długi proces.
        </p>
        <p>
          Pierwsze strony internetowe tworzyłem znajomym, najczęściej za darmo.
          Potrzebowali ich np. jako zaliczenia do szkoły. Mimo braku
          wynagrodzenia, było to jednak pierwsze doświadczenie z klientami.
          Mieli jakieś (niewielkie) wymagania, konieczne było też dopilnowanie
          terminu realizacji.
        </p>
        <h3>Szablony Allegro</h3>
        <p>
          W tamtym okresie w Polsce powstawał serwis Allegro. Używał on systemu
          szablonów, które można było samodzielnie tworzyć uatrakcyjniając
          oferty produktów. Nauczyłem się tworzyć tego typu szablony i
          realizować je odpłatnie.
        </p>
        <Image
          placeholder="blur"
          src={img_szablon_allegro}
          alt="Szablon Allegro z armaturą"
        />
        <p>
          Były to jednak niewielkie pieniądze. Za realizację indywidualnych
          szablonów klienci płacili max 200-300 złotych.
        </p>
        <p>
          Później poznając PHP stworzyłem generator szablonów “Kreator 101”.
          Dzięki niemu klienci mogli samodzielnie wybierać spośród kombinacji
          szat graficznych.
        </p>
        <p className="lead">
          Oprogramowanie sprzedawałem w modelu SaaS (Software as a Service) za
          opłatą dostępową 100 zł
        </p>
        <p>
          Sprzedaż była zautomatyzowana (poznałem SOAP API, które udostępniało
          Allegro) i skalowała się lepiej niż realizacja indywidualnych
          szablonów.
        </p>
        <Image
          placeholder="blur"
          src={img_kreator_szablonow_allegro}
          alt="Panel kreatora szablonów Allegro"
        />
        <h3>Strony internetowe</h3>
        <p>
          W międzyczasie poznawałem też CMSy (systemy zarządzania treścią). Na
          WordPressie założyłem bloga, gdzie chętnie dzieliłem się swoją wiedzą.
        </p>
        <p>
          Innym CMSem, który poznałem była Joomla. Świetnie sprawdzał się jako
          panel zarządzania dla stron klientów. Rozszerzony o moduł sklepowy
          poszerzał też możliwości świadczonych przeze mnie usług.
        </p>
        <p>
          Realizując strony internetowe dla klientów z użyciem CMSów kasowałem
          już nieco lepsze pieniądze niż w przypadku szablonów Allegro. Faktury
          oscylowały w okolicach 1000 - 1500 zł.
        </p>
        <Image
          src={img_strona_sklepu_stomatologicznego}
          alt="Strona internetowa sklepu stomatologicznego"
        />
        <p>
          Na tym etapie bycie Freelancerem pozwalało mi już swobodnie wynajmować
          mieszkanie i samodzielnie się utrzymywać.
        </p>
        <h3>Przeprowadzka do Azji</h3>
        <p>
          Zacząłem też tworzyć bardziej rozbudowane kursy niż pojedyncze wpisy
          na blogu. Tym samym tworząc strony i sprzedając swoją wiedzę miałem na
          tyle zdywersyfikowane źródła przychodów, że mogłem zaryzykować i…
          przeprowadzić się do Azji.
        </p>
        <p>
          Koszty życia były porównywalne do tych w Polsce. Pogoda jednak
          znacznie lepsza. Pierwszy miesiąc przemieszkałem na Filipinach.
          Później przeniosłem się do Kuala Lumpur w Malezji i tam wynająłem
          apartament w wieżowcu z basenem.
        </p>
        <Image
          src={img_kuala_lumpur_basen}
          alt="Adrian Bienias pod wodą w basenie apartamentowca Swiss Garden w Kuala Lumpur"
        />
        <p>
          Wiza turystyczna pozwalała przebywać w Malezji tylko 3 miesiące więc
          chcąc nie chcąc wyjeżdżałem np. do Tajlandii czy Singapuru, aby na
          wjeździe powrotnym znów otrzymywać pozwolenie na 3 miesięczny pobyt.
        </p>
        <p>
          To była esencja pracy Freelancera i spełnienie marzenia zdalnej pracy
          z dowolnego miejsca na Ziemi.
        </p>
        <Image placeholder="blur" src={img_azja} alt="" />
        <h3>Autorski serwis z kursami</h3>
        <p>
          W między czasie tworzyłem serwis (w PHP i frameworku CodeIgniter),
          który umożliwiał innym sprzedaż kursów wideo. Serwis nazwałem kuvi.pl
          (skrót od kursy video).
        </p>
        <p>
          Rozwijanie serwisu pod kątem biznesowym nie przynosiło mi jednak
          frajdy. Niechętnie zabierałem się do szukania nowych autorów kursów i
          nawiązywania z nimi współpracy. Mogłem natomiast tygodniami jak
          zahipnotyzowany pisać kod, dodając nowe funkcjonalności do serwisu.
          Finalnie zdecydowałem się więc na sprzedaż serwisu za 10 000 zł.
        </p>
        <Image placeholder="blur" src={img_kuvi_umowa_sprzedazy} alt="" />
        <h3>W poszukiwaniu dalszego rozwoju</h3>
        <p>
          Pisanie kodu dawało mi frajdę, ale byłem tylko ja i mój kod. Zależało
          mi na zdobyciu Web Developerskiego doświadczenia pracy w zespole.
          Chciałem poobcować z ludźmi mądrzejszymi ode mnie.
        </p>
        <p className="lead">
          W pamięć zapadły mi słowa “
          <em>
            Jeśli jesteś najmądrzejszą osobą w pokoju, to znaczy, że jesteś w
            złym pokoju
          </em>
          ”
        </p>
        <p>
          Do tej pory pracowałem sam, jako jedyny w pokoju. Chciałem to zmienić.
        </p>
        <p>
          Szukałem feedbacku czy kod, który piszę ma jakąś jakość. W odpowiedzi
          na te potrzeby znalazłem pracę w australijskiej firmie Atlassian. Od
          tej pory nie byłem już sam w pokoju i na pewno nie byłem w nim
          najmądrzejszy.
        </p>
        <Image placeholder="blur" src={img_jira_work} alt="" />
        <p>
          Praca jako inżynier oprogramowania była dla mnie wielkim zastrzykiem
          nowych wyzwań. Była też świetnym przykładem tego, że do znalezienia
          pracy nie potrzeba studiów.
        </p>
        <p>
          Mimo, że była to moja pierwsza praca w IT, od razu wskoczyłem na
          pozycję Mida. W pracy liczyły się moje umiejętności, a nie papier z
          uczelni.
        </p>
        <p>
          Wiedza, którą do tej pory zgromadziłem pozwoliła mi rozwijać
          oprogramowanie do zarządzania (Jira) używane na całym świecie przez
          wielkie korporacje (Twitter, Uber, Lufthansa) czy nawet agencje
          kosmiczne (SpaceX, NASA).
        </p>
        <Image placeholder="blur" src={img_jira_credits} alt="" />
        <p>
          Wynagrodzenie również było satysfakcjonujące i bardzo stabilne w
          porównaniu do wahań zarobków Freelancerskich. Odeszła cała działka
          związana ze zdobywaniem klientów.
        </p>
        <p>
          Wystarczyło po prostu wykonywać dobrze swoją pracę, a co miesiąc (lub
          nawet częściej z uwagi na premie) wpływał przelew na konto
        </p>
        <Image placeholder="blur" src={img_wynagrodzenie_etat} alt="" />
        <p>
          Do pracy rekrutowałem się w 100% zdalnie przez wideo rozmowy. Po
          pojawieniu się pandemii praca również przeszła w 100% na tryb zdalny.
        </p>
        <p className="lead">
          Było to kolejne potwierdzenie ogromnych zalet branży
          Web&nbsp;Developmentu
        </p>
        <p>
          Finalnie po 2 latach pracy na etacie pojawił się we mnie głód nowych
          wyzwań i tęsknota za niezależnością. Chciałem wrócić na własną
          ścieżkę.
        </p>
        <p>
          Od zawsze lubiłem uczyć się nowych rzeczy, a następnie dzielić swoją
          wiedzą z innymi. I właśnie w duchu tej idei stworzyłem nowy serwis do
          nauki Web Developmentu. Nazwałem go{" "}
          <a href="https://codisity.pl/">Codisity</a> (od Coding University).
        </p>
        <p>
          Jeśli chcesz dopiero zostać Web Developerem lub chcesz rozwijać
          posiadane już umiejętności Developerskie, zapraszam Cię do{" "}
          <a href="https://codisity.pl/">
            nauki projektowania i tworzenia stron internetowych
          </a>{" "}
          razem ze mną.
        </p>

        <h2 id="kim-jest-autor">O autorze</h2>
        <div className="flex gap-8">
          <div className=" max-w-[200px]">
            <Image
              src={img_adrian_bienias}
              alt="Adrian Bienias w koszulce Atlassian, start rakiety SpaceX w tle."
              className="rounded-md"
            />
          </div>
          <div>
            <p className="m-0">
              <strong>Adrian Bienias</strong>
            </p>
            <ul>
              <li>Full Stack Developer</li>
              <li>Inżynier oprogramowania</li>
              <li>Autor kursów i serwisu Codisity</li>
            </ul>
          </div>
        </div>

        <h2 id="feedback">Masz pytania?</h2>
        <p>
          Pisz śmiało na <Obfuscate email="adrian@codisity.pl" />
        </p>
      </main>

      <footer className="max-w-screen-xl mt-12 mx-auto p-4 text-gray-400 text-sm not-prose text-center">
        <p className="mb-4">
          Strona wykorzystuje pliki cookies i podobne technologie.
          <br />
          Jeśli nie wyrażasz na to zgody, zmień ustawienia w swojej
          przeglądarce.
        </p>
      </footer>
    </div>
  )
}
